const PATTERNS = [
    { slug: "01_arrays-hashing", display: "arrays & hashing", tag: "arrays-hashing" },
    { slug: "02_two-pointers", display: "two pointers", tag: "two-pointers" },
    { slug: "03_sliding-window", display: "sliding window", tag: "sliding-window" },
    { slug: "04_stack", display: "stack", tag: "stack" },
    { slug: "05_binary-search", display: "binary search", tag: "binary-search" },
    { slug: "06_linked-list", display: "linked list", tag: "linked-list" },
    { slug: "07_trees", display: "trees", tag: "trees" },
    { slug: "08_tries", display: "tries", tag: "tries" },
    { slug: "09_heap-priority-queue", display: "heap & priority queue", tag: "heap-priority-queue" },
    { slug: "10_backtracking", display: "backtracking", tag: "backtracking" },
    { slug: "11_graphs", display: "graphs", tag: "graphs" },
    { slug: "12_advanced-graphs", display: "advanced graphs", tag: "advanced-graphs" },
    { slug: "13_1d-dp", display: "1-d dp", tag: "1d-dp" },
    { slug: "14_2d-dp", display: "2-d dp", tag: "2d-dp" },
    { slug: "15_greedy", display: "greedy", tag: "greedy" },
    { slug: "16_intervals", display: "intervals", tag: "intervals" },
    { slug: "17_math-geometry", display: "math & geometry", tag: "math-geometry" },
    { slug: "18_bit-manipulation", display: "bit manipulation", tag: "bit-manipulation" }
];

const ROOT = "01_technicals/01_patterns";
const PROBLEM_TEMPLATE = "templates/problem-template.md";
const NOTE_TEMPLATE = "templates/labuladong-notes-template.md";

function kebab(s) {
    return s.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

function findHubBasename(app, patternSlug) {
    const hub = app.vault.getMarkdownFiles()
        .find(f => f.path.startsWith(`${ROOT}/${patternSlug}/hub - `));
    return hub ? hub.basename : "";
}

async function buildProblem(params, pattern) {
    const { app, quickAddApi: { suggester, inputPrompt } } = params;

    const title = await inputPrompt("problem title (e.g. two sum)");
    if (!title) return;

    const difficulties = ["easy", "medium", "hard"];
    const difficulty = await suggester(difficulties, difficulties, "difficulty");
    if (!difficulty) return;

    const link = (await inputPrompt("problem link (empty ok)")) || "";

    const noteFiles = app.vault.getMarkdownFiles()
        .filter(f => f.path.startsWith(`${ROOT}/${pattern.slug}/notes/`))
        .sort((a, b) => a.basename.localeCompare(b.basename));
    const NONE = "(none — pattern-level)";
    const subNote = await suggester(
        [NONE, ...noteFiles.map(f => f.basename)],
        [null, ...noteFiles],
        "link to a sub-pattern note?"
    );

    const slug = kebab(title);
    if (!slug) {
        new Notice("title produced empty slug, aborting");
        return;
    }
    const targetPath = `${ROOT}/${pattern.slug}/problems/${slug}.md`;
    if (app.vault.getAbstractFileByPath(targetPath)) {
        new Notice(`already exists: ${targetPath}`);
        return;
    }

    const tpl = app.vault.getAbstractFileByPath(PROBLEM_TEMPLATE);
    if (!tpl) { new Notice(`missing template: ${PROBLEM_TEMPLATE}`); return; }
    let content = (await app.vault.read(tpl)).replace(/\r\n/g, "\n");

    const hubBase = findHubBasename(app, pattern.slug);
    const subLink = subNote ? `[[${subNote.basename}]]` : "";
    const backlink = subLink
        ? `> ↰ pattern hub: [[${hubBase}]] · sub-pattern note: ${subLink}`
        : `> ↰ pattern hub: [[${hubBase}]]`;

    content = content
        .replace(/^title: ""$/m, `title: "${title.replace(/"/g, '\\"')}"`)
        .replace(/^difficulty: $/m, `difficulty: ${difficulty}`)
        .replace(/^pattern: $/m, `pattern: ${pattern.tag}`)
        .replace(/^note: $/m, subLink ? `note: "${subLink}"` : `note: `)
        .replace(/^link: $/m, `link: ${link}`)
        .replace(/^  - pattern\/$/m, `  - pattern/${pattern.tag}`)
        .replace(/^  - difficulty\/$/m, `  - difficulty/${difficulty}`)
        .replace(/^> ↰ pattern hub: \[\[ \]\] · sub-pattern note: $/m, backlink)
        .replace(/^# $/m, `# ${title}`);

    const file = await app.vault.create(targetPath, content);
    await app.workspace.getLeaf(false).openFile(file);
    new Notice(`problem created: ${title}`);
}

async function buildNote(params, pattern) {
    const { app, quickAddApi: { suggester, inputPrompt } } = params;

    const section = await inputPrompt("section title (e.g. prefix sum array)");
    if (!section) return;

    const sources = ["labuladong", "neetcode", "other"];
    const source = await suggester(sources, sources, "source");
    if (!source) return;

    const chapter = (await inputPrompt("chapter (empty ok)")) || "";

    const slug = kebab(section);
    if (!slug) {
        new Notice("section produced empty slug, aborting");
        return;
    }
    const targetPath = `${ROOT}/${pattern.slug}/notes/${slug}.md`;
    if (app.vault.getAbstractFileByPath(targetPath)) {
        new Notice(`already exists: ${targetPath}`);
        return;
    }

    const tpl = app.vault.getAbstractFileByPath(NOTE_TEMPLATE);
    if (!tpl) { new Notice(`missing template: ${NOTE_TEMPLATE}`); return; }
    let content = (await app.vault.read(tpl)).replace(/\r\n/g, "\n");

    const hubBase = findHubBasename(app, pattern.slug);
    const today = new Date().toISOString().slice(0, 10);

    content = content
        .replace(/^source: labuladong$/m, `source: ${source}`)
        .replace(/^chapter: chapter 0$/m, `chapter: ${chapter}`)
        .replace(/^section:$/m, `section: ${section}`)
        .replace(/^pattern:$/m, `pattern: ${pattern.tag}`)
        .replace(/^date: "\{\{date\}\}"$/m, `date: ${today}`)
        .replace(/^  - source\/labuladong$/m, `  - source/${source}\n  - pattern/${pattern.tag}`)
        .replace(/^> ↰ pattern hub: \[\[ \]\]$/m, `> ↰ pattern hub: [[${hubBase}]]`);

    const file = await app.vault.create(targetPath, content);
    await app.workspace.getLeaf(false).openFile(file);
    new Notice(`note created: ${section}`);
}

module.exports = async (params) => {
    const { quickAddApi: { suggester } } = params;

    const pattern = await suggester(
        PATTERNS.map(p => p.display),
        PATTERNS,
        "select pattern"
    );
    if (!pattern) return;

    const kinds = ["problem", "note"];
    const kind = await suggester(kinds, kinds, "what kind of file?");
    if (!kind) return;

    if (kind === "problem") {
        await buildProblem(params, pattern);
    } else {
        await buildNote(params, pattern);
    }
};
