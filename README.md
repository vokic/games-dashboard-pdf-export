# Board Games Catalog - Angular Project for RBT

## Overview

This is a simple Angular project showcasing a catalog of board games. It includes features like displaying game cards, a PDF preview modal, and exporting the game list as a PDF.

## Technologies Used

- **Angular 19** (Standalone Components)
- **Tailwind CSS** for styling
- **Material Icons** for UI icons
- **html2pdf.js** for PDF export
- **TypeScript** for type safety

## Project Structure

```
src/
├── app/
│ ├── components/
│ │ ├── game-card/ # Board game card component
│ │ └── pdf-preview/ # PDF preview component
│ ├── services/
│ │ └── pdf-export.service.ts # PDF export service
│ ├── app.component.* # Main app files
├── assets/
tailwind.config.js
package.json
README.md
```

## PDF Download

- The **Download** button exports the preview modal content as a PDF (`board-games.pdf`).
- The PDF includes all game cards exactly as shown in the preview modal.
- You can download the sample PDF [here](src/assets/board-games.pdf).

## Future Improvements

- Improve PDF styling and layout further.
- Optimize PDF size
- Implement search and filtering of board games.
- Implement different design and animations (+ improved accessibility features) since it is gaming theme
