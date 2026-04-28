# Setup — do this once after cloning

## 1. Install plugins

Open **Settings → Community Plugins → Browse** and install these:

- **dataview**
- **excalidraw**
- **homepage** (by mirnovov)
- **quickadd**
- **spaced repetition**
- **templater**
- **obsidian tasks**
- **tag wrangler**
- **buttons**

Then enable them in **Community Plugins**.

## 2. Verify plugin configs

Most configs are already set in `.obsidian/plugins/*/data.json`. Just confirm these in the UI:

- **Templater** → Template folder location = `_templates`
- **Homepage** → Homepage = `_meta/homepage.md`, Open on startup = ON
- **Excalidraw** → Excalidraw folder = `05_excalidraw`
- **Spaced Repetition** → Flashcard tags = `#flashcard`

## 3. QuickAdd (must be done manually in UI)

QuickAdd ignores hand-edited `data.json`. You must use the settings UI and click the **lightning bolt ⚡** for each choice.

### Choice A: job app

1. Settings → QuickAdd → **Add Choice**
2. Name: `job app`
3. Type: `Template`
4. Gear icon:
   - **Template path:** `_templates/application-template.md`
   - **Create in folder:** `09_applications/apps`
   - **File name format:** `{{DATE:YYYY-MM-DD}}-{{VALUE:Company|case:kebab}}.md`
   - Toggle **ON:** Create file if it doesn't exist, Open file, Focus new pane
5. Lightning bolt ⚡

### Choice B: New Project

1. Settings → QuickAdd → **Add Choice**
2. Name: `New Project`
3. Type: `Template`
4. Gear icon:
   - **Template path:** `_templates/project-template.md`
   - **Create in folder:** `10_resume-projects/projects`
   - **File name format:** `{{VALUE:org-slug}}-{{VALUE:project-slug}}.md`
   - Toggle **ON:** Create file if it doesn't exist, Open file, Focus new pane
5. Lightning bolt ⚡

### Macro: job update

1. Settings → QuickAdd → **Manage Macros**
2. **Add Macro** → name it `Update Status`
3. Click **Configure** on the macro
4. Under **User Scripts**, select `_meta/scripts/update-app-status.js` → click **Add**
5. Close the macro modal

6. Back in QuickAdd main settings, click **Add Choice**
   - Name: `job update`
   - Type: `Macro`
7. Gear icon → select the `Update Status` macro
8. Lightning bolt ⚡

## 4. Hotkeys (optional)

**Settings → Hotkeys** → search for your QuickAdd choices and assign keys:
- `QuickAdd: job app`
- `QuickAdd: job update`

## 5. Bases (optional)

If you have **Bases** (core plugin, Obsidian 1.9+):
1. Enable it in **Settings → Core Plugins**
2. Open `09_applications/all-applications.base` in Obsidian and configure your views

If you don't have Bases, the Dataview tables in `_meta/homepage.md` and `09_applications/_hub - applications overview.md` cover the same info.

---

After this, close and reopen Obsidian. It should boot straight to the homepage dashboard.
