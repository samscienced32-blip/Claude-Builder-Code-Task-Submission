# Large Button Fintech Model for Figma

This plugin generates a Figma-native prototype for a low-literacy, dusty-hands fintech flow.

## What changed

- Starts with one-time language selection: Hindi, Marathi, Bengali, Tamil
- Uses only three large bottom-reachable actions:
  - Daily wage slip
  - Contractor grievance
  - Send ₹800 home
- Uses pure white screen backgrounds
- Uses lighter button shades with black text and thick outlines
- Adds a rupee icon, grievance document icon, and transfer-to-home icon
- Adds audio cue panels for selected actions and distinct success/failure tone states
- Adds an auto-light/brightness indicator for outdoor sunlight use

## Run it in Figma

1. Open a Figma Design file in the Figma desktop app.
2. Go to `Plugins > Development > Import plugin from manifest...`.
3. Select `Key-button-model/manifest.json`.
4. Run `Key Button Fintech Model`.
5. Open the Figma prototype from the `START - choose language` frame.

## Evaluation notes

Figma prototypes cannot reliably generate phone text-to-speech or read ambient light from plugin-created nodes. This Figma model marks those behaviors visually:

- Speaker cue: the app should speak that phrase in the selected language.
- Green tone cue: recognizable success audio.
- Red tone cue: recognizable failure audio.
- Auto light cue: the real app should use ambient light sensing where available, with a manual Sun Mode fallback.
