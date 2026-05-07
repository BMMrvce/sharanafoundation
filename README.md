
  # Bilingual NGO Website Design

  This is a code bundle for Bilingual NGO Website Design. The original project is available at https://www.figma.com/design/tZX5DHyWPr1dOfjY2PJLPC/Bilingual-NGO-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Google Sheets CMS for Camps and Activities

  The Events section now reads Camps and Activities rows from SheetDB at runtime.

  1. Create a `.env` file in the project root.
  2. Add your SheetDB endpoint:

  `VITE_SHEETDB_ACTIVITIES_URL=https://sheetdb.io/api/v1/YOUR_SHEETDB_ID`

  Expected sheet columns:

  - `title`
  - `date`
  - `location`
  - `description`
  - `status` (`Upcoming`, `Ongoing`, `Completed`)

  New rows added by the secretary in Google Sheets are fetched dynamically by the website without redeployment.
  