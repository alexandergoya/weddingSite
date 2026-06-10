# Wedding Site — Context

## Glossary

| Term        | Definition                                                    |
| ----------- | ------------------------------------------------------------- |
| Wedding     | The event celebrating the marriage of Alexander and Elle      |
| Couple      | Alexander (groom) and Elle (bride)                            |
| Guest       | A person invited to the wedding                               |
| RSVP        | A guest's response indicating whether they will attend        |
| Site        | The single-page static website hosted on GitHub Pages         |
| Section     | A distinct content area on the single page (photos, RSVP, etc.) |
| AstroWind   | The open-source Astro 6 + Tailwind CSS starter template used as the site's foundation |
| Formspree   | The external form backend service that collects RSVP submissions and emails them to the couple |
| Forest theme | The visual direction: elegant/classic with deep greens, earth tones, botanical elements, serif fonts |
| Desert theme | The alternate visual direction: warm terracotta, sandy beige, burnt sienna, serif fonts |
| Sections | Hero, Our Story (timeline + photos), Event Details, Photos (grid + GLightbox), Announcements (Markdown), RSVP (Formspree), FAQ, Accommodations (TBD content) |
| Photo collection | Photos managed via Astro content collections — each photo has a Markdown entry in `src/data/photo/` with caption, date, and order metadata |
| Wedding date | August 28, 2026 |
| Wedding venue | The Forge Social House |
| Ceremony time | 7:00 PM |
| Reception time | 8:00 PM |
| Event end time | 11:00 PM |
| RSVP deadline | July 17, 2026 |
| Dress code | Cocktail attire |
| Parking | Parking lot available at the venue |
| Kids policy | Children are welcome |
| Plus-one policy | Allowed — guests register their plus-one during RSVP |
| RSVP form fields | Name, email, attending (yes/no), number of guests, dietary restrictions |
| RSVP notification | Both Alexander and Elle receive email notifications from Formspree |
| Deployment | GitHub Pages project subpath at `/weddingSite` |
| GLightbox | The lightweight JavaScript library used for the photo gallery lightbox |
