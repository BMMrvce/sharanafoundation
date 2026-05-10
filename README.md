
  # Sri Chikkenakoppa Channaveeratata Sharanara Balaga (R)

  This is a code bundle for Sri Chikkenakoppa Channaveeratata Sharanara Balaga (R). The original project is available at https://www.figma.com/design/tZX5DHyWPr1dOfjY2PJLPC/Bilingual-NGO-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Google Sheets CMS for Camps and Activities

  The Events section now reads Camps and Activities rows from a Google Sheets-backed API at runtime using Stein.

  1. Create a `.env` file in the project root (if you don't already have one).
  2. Add your Stein endpoint (Stein/Steinhq storage URL):

  `VITE_STEIN_ACTIVITIES_URL=https://api.steinhq.com/v1/YOUR_STEIN_ID`

  Expected sheet columns:

  - `title`
  - `date`
  - `location`
  - `description`
  - `status` (`Upcoming`, `Ongoing`, `Completed`)

  New rows added by the secretary in Google Sheets are fetched dynamically by the website without redeployment.
  