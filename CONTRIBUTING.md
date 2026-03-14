# Contributing to the Website

Thank you for contributing to the .devClub website.

Before making changes:

1. Create a new branch from `main`
2. Make your changes
3. Test the site locally
4. Open a Pull Request

---

# Adding New Executives

Executive team members are configured in:

```
src/resources/data/teamConfig.ts
```

Add a new year entry containing all executives for that year.

Example:

```ts
"20xx": [
  {
    firstName: "Person",
    middleName: "Number", // optional
    lastName: "One",
    role: "Executive role",
    image: "/assets/team/20xx/headshot.png",
    linkedin: "https://linkedin.com/in/username",
    github: "https://github.com/username",
    instagram: "", // optional
    discord: "", // optional
    website: "" // optional
  }
]
```

Place the corresponding headshot image in:

```
public/assets/team/20xx/
```

---

# Adding New Events

Events are configured in:

```
src/resources/data/events.ts
```

Add a new entry including:

- Event name
- Description
- Event image/banner
- Optional path/link
- Optional recurring flag

Run the project locally to verify the event renders correctly.

---

# Adding Upcoming Events

Upcoming events are also configured in:

```
src/resources/data/events.ts
```

Fields you may use:

- `upcomingTitle`
- `upcomingDescription`
- `date`
- `location`
- `rsvp`
- `upcomingImage`

If unsure about fields, check:

```
src/resources/data/types.ts
```

---

# Adding a New .devHacks Page

Open:

```
src/resources/data/hackathonInfoConfig.ts
```

Add a new year entry with the relevant hackathon information.

A route will automatically be created:

```
/devhacks/20xx
```

Run the project locally and verify the page works.

---

# Adding Prize Categories for .devHacks

Update `hackathonThemeConfig.ts` with:

- A new year entry
- Prize name
- Description

Confirm the prize appears correctly on a
`devhacks/202x/themes` route.

---

# Adding Sponsors for .devHacks

1. Add sponsor logos to the correct devhacks year folder inside:

```
src/resources/images/devhacks/202x/sponsors
```

2. Import them in:

```
src/resources/data/devHacksArchive/HackathonYearSponsors.tsx
```

Verify the images load and display properly.

---

# Adding Pictures for .devHacks

1. Add images to the correct devhacks year folder inside:

```
src/resources/images/images/devhacks/202x/pictures
```

2. Import them in:

```
src/resources/data/devHacksArchive/HackathonYearPictures.tsx
```

Confirm the gallery displays correctly.

---

# Adding .devHacks Winners

Winners are configured in:

```
src/resources/data/hackathonWinners.ts
```

Add:

- Project name
- Team members
- Prize category

Verify spelling and formatting before committing.

---

# Adding Archive Cards to the Main .devHacks Page

Archive cards display previous hackathons.

Add a card containing:

- Hackathon year
- Title
- Short description
- Image
- Link to the hackathon page

Confirm it appears in the archive section.

---

# Notes for Contributors

Before opening a Pull Request:

- Test changes locally
- Follow existing code style
- Verify images and links load correctly
- Avoid committing unnecessary files

---

Thank you for helping improve the **.devClub website** 🚀
