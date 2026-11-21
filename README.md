# Arcane Odyssey Gear Workshop

A static, browser-based gear and stat planner for Arcane Odyssey. No build step, server software, or package installation is required.

## Run locally

From this folder, start a local web server:

```powershell
py -m http.server 8000
```

Open <http://localhost:8000> in your browser. You can also open `index.html` directly, but serving the folder over HTTP is more like the published site.

## Publish with GitHub Pages

1. Push the project files to the `main` branch of a GitHub repository.
2. In **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. The included workflow deploys the site when changes are pushed to `main`. The workflow run provides the published URL.

## Project layout

- `index.html` — gear planner page.
- `stat-builds/` and `stat-build.html` — stat planner page and legacy entry point.
- `app.js`, `stat-build.js`, `theme.js` — planner behavior, calculations, and theme.
- `styles.css` — page styling.
- `*-catalog.js` and `*-records.js` — gear, weapon, and stat data.
- `assets/` — images and stat icons.
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow.

## Using the planners

- Selectors offer searchable gear and weapon options.
- Builds are saved in your browser's local storage. Use **Copy build code** to share one; builds are not uploaded or synchronized.
- The stat planner estimates your class from the percentages of points you've invested. Unspent points are excluded.
- Arcanium weapon variants are for Conjurers; Strength variants are for Warlords. Selections are adjusted when your estimated class changes.
- Modifier availability follows the [Modifiers wiki](https://roblox-arcane-odyssey.fandom.com/wiki/Modifiers), including restrictions for Sunken and Lost gear. Dragon gear is Atlantean-only.

## Data and attribution

The planner is an independent fan project and is not affiliated with Arcane Odyssey or its developers. Game data and icons are based on the following sources:

- **Gear and modifiers:** [Armor](https://roblox-arcane-odyssey.fandom.com/wiki/Armor), [Accessories](https://roblox-arcane-odyssey.fandom.com/wiki/Accessories), [Jewelcrafting](https://roblox-arcane-odyssey.fandom.com/wiki/Jewelcrafting), [Modifiers](https://roblox-arcane-odyssey.fandom.com/wiki/Modifiers), and [Gear Stats](https://roblox-arcane-odyssey.fandom.com/wiki/Gear_Stats).
- **Weapons and stat builds:** [Stat Builds](https://roblox-arcane-odyssey.fandom.com/wiki/Stat_Builds), [Weapons](https://roblox-arcane-odyssey.fandom.com/wiki/Weapons), and [Weapon Skills](https://roblox-arcane-odyssey.fandom.com/wiki/Weapons/Skills).
- **Ships:** [Ships](https://roblox-arcane-odyssey.fandom.com/wiki/Ships), [Ship Parts](https://roblox-arcane-odyssey.fandom.com/wiki/Ship_Parts), and [Ship Stats](https://roblox-arcane-odyssey.fandom.com/wiki/Ship_Stats).
- **Spells and techniques:** [Spells](https://roblox-arcane-odyssey.fandom.com/wiki/Spells) and [Techniques](https://roblox-arcane-odyssey.fandom.com/wiki/Techniques).
- **Dragon gear data:** the wiki's [equipment data module](https://roblox-arcane-odyssey.fandom.com/wiki/Module:Equipment/data).

Additional planner details:

- Named weapons use their listed type, variant, quality, and level; unique weapons use normal-weapon skill scaling.
- Weapon skill slots and Ultimate Art requirements follow the wiki-listed quality and unlock requirements.
- Dragon gear uses stats for its selected color. Regular Dragon gear defaults to Brown; Corrupted Dragon gear defaults to Dragon.
- Gear stat icons follow the wiki's current stat list. Dexterity uses the legacy Attack Speed icon, Pierce uses Armor Piercing, and Speed is omitted.
