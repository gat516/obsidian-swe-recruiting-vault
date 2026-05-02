module.exports = async (params) => {
    const { app, quickAddApi: { suggester, inputPrompt } } = params;

    const appFiles = app.vault.getMarkdownFiles()
        .filter(f => f.path.startsWith("03_applications/apps/"))
        .sort((a, b) => a.basename.localeCompare(b.basename));

    if (appFiles.length === 0) {
        new Notice("No applications found in 03_applications/apps/");
        return;
    }

    const selectedFile = await suggester(
        appFiles.map(f => f.basename),
        appFiles,
        "Select application to update"
    );
    if (!selectedFile) return;

    const fields = [
        { name: "status", label: "Status", type: "select", options: ["applied", "oa", "interviewing", "offer", "rejected"] },
        { name: "next_action", label: "Next action", type: "text" },
        { name: "next_action_due", label: "Next action due (YYYY-MM-DD)", type: "text" },
        { name: "interview_date", label: "Interview date (YYYY-MM-DD)", type: "text" },
        { name: "round", label: "Interview round", type: "text" },
        { name: "link", label: "Application link", type: "text" },
        { name: "resume", label: "Resume link", type: "text" }
    ];

    const selectedField = await suggester(
        fields.map(f => f.label),
        fields,
        "What do you want to update?"
    );
    if (!selectedField) return;

    let newValue;
    if (selectedField.type === "select") {
        newValue = await suggester(selectedField.options, selectedField.options, `New ${selectedField.label}`);
    } else {
        newValue = await inputPrompt(`New ${selectedField.label}`);
    }
    if (!newValue) return;

    let dueDate = null;
    if (selectedField.name === "status" && newValue === "oa") {
        dueDate = await inputPrompt("OA due date (YYYY-MM-DD)");
    }

    await app.fileManager.processFrontMatter(selectedFile, (frontmatter) => {
        frontmatter[selectedField.name] = newValue;
        if (dueDate) {
            frontmatter.next_action_due = dueDate;
        }
    });

    let noticeMsg = `${selectedField.label} → ${newValue}`;
    if (dueDate) noticeMsg += `, OA due → ${dueDate}`;
    new Notice(`Updated ${selectedFile.basename}: ${noticeMsg}`);
};
