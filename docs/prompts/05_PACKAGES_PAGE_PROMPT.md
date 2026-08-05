# Phase 5 Prompt — Implement Menu

Proceed only after the Home page passes its checks.

## Visual source

Use the attached generated Menu mockup as the primary visual target.

The exact content in this prompt and `docs/CONTENT_SOURCE_OF_TRUTH.md` overrides any incorrect text generated inside the image mockup.

## Required sections

### 1. Page hero

- H1: `Menu`
- Supporting text:
  `Choose the right setup for your celebration, meeting, or group event.`
- Warm buffet image
- Active Menu navigation state

### 2. Regular Catering Packages

Heading:

- `Regular Catering Packages`
- `Fixed packages for 50 guests`

Create three cards.

#### Package 01

- ₱30,000
- Good for 50 guests
- Menudo
- Chopsuey
- Chicken Cordon Bleu
- Beef with Mushroom
- Spaghetti

#### Package 02

- ₱30,000
- Good for 50 guests
- Beef Caldereta
- Pork Hamonado
- Chopsuey
- Lumpiang Shanghai
- Spaghetti

#### Package 03

- ₱30,000
- Good for 50 guests
- Beef Caldereta
- Buffalo Chicken
- Lumpiang Shanghai
- Menudo
- Spaghetti

#### Shared inclusion strip

- One dessert
- Salad bar
- Iced tea
- Rice
- Soup
- Tables and chairs
- Buffet setup

Important:

- Do not show ₱600 per head.
- Do not invent the price for additional guests.
- Add:
  `Planning for more than 50 guests? Message us for a custom quotation.`
- Do not list serving staff until it is reconfirmed.

### 3. Grazing Table Packages

Heading:

- `Grazing Table Packages`
- `₱1,000 per guest`
- `Minimum 50 guests`
- `Total depends on confirmed guest count`
- `Includes tables and chairs`

#### Package A

- Beef Kare-Kare
- Pork Menudo
- Chicken Wings
- Fish with Tofu
- Egg Drop Soup
- Rice
- Spaghetti

#### Package B — Best Seller marker on Pork Menudo

- Beef Caldereta
- Pork Menudo
- Buffalo Chicken
- Fish with Creamy Sauce
- Chicken Chowder Soup
- Rice
- Pasta Carbonara

#### Package C

- Beef with Mushroom
- Pork Menudo
- Chicken Cordon Bleu
- Baked Bangus
- Potato Soup
- Rice
- Chicken Pesto

#### Package D

- Beef with Broccoli
- Bicol Express
- Chicken Afritada
- Sweet and Sour Fish
- Pumpkin Soup
- Rice
- Pancit Canton

### 4. Grazing-table inclusions

Present in readable groups, not as an unreadable wall of text.

Fruits:

- Seasonal fruits
- Watermelon
- Grapes
- Oranges

Fresh:

- Lettuce
- Cucumber

Desserts and sweets:

- Mango Tapioca
- Coffee Jelly
- Cake Bites
- Cupcakes
- Cookies
- Crinkles

Savory:

- Chicken Empanada
- Lumpiang Shanghai
- Nori Chicken
- Brie Cheese
- Camembert Cheese
- Salami
- Bacon
- Bite-Sized Bread

Beverages:

- Lemon Iced Tea
- Water

On small screens use grouped accordions or stacked cards.

### 5. Grazing estimate tool

Add a compact estimator:

- input minimum 50;
- maximum 600;
- step 1 or 10;
- default 50;
- total = guest count × 1000;
- Philippine peso formatting;
- an accessible label;
- plus and minus controls;
- note:
  `Estimate only. Final menu, guest count, location, and event arrangements are confirmed directly.`

Do not create an estimator for regular packages.

### 6. Packed Meals

Show:

- breakfast;
- lunch;
- dinner / group meals;
- price range ₱250–₱300 per pack.

Breakfast sample:

- Rice
- Egg
- Hotdog

Lunch sample:

- One piece of chicken
- Vegetables
- Pancit

Dinner:

- Menu options available upon request

Audience note:

- call centers;
- offices;
- meetings;
- seminars;
- business accounts;
- group orders.

Add:

`Contact us for available menus, minimum quantities, delivery arrangements, and a custom bulk quotation.`

Do not invent minimum order or included utensils/drinks.

### 7. Food Trays

Use:

`Food trays are available for parties, offices, and group meals. Message us to request the current food-tray menu, serving sizes, and prices.`

CTA:

- Ask for the Food Tray Menu → Facebook

Do not publish prices.

### 8. Additional Event Services

Cards:

- Styling
- Backdrop
- Sound System
- Host
- Photographer / Videographer
- Arranged Through Trusted Partners

Use the approved partner wording.

Do not invent prices.

### 9. Customization note

Use:

`Selected dishes may be replaced with another option from the same food category. Premium substitutions, additional dishes, and special requests may have additional charges and must be discussed directly.`

### 10. Final CTA and footer

Use:

- Need a custom setup?
- Message Us on Facebook
- Request a Quote

## Tests

### Unit

- regular package data;
- grazing package data;
- peso formatter;
- grazing estimator:
  - 50 → ₱50,000
  - 75 → ₱75,000
  - 100 → ₱100,000
  - values below 50 are rejected or clamped;
  - values above 600 are rejected or clamped;
- food-pack price range;
- no invented food-tray price.

### E2E

- each package heading appears;
- package prices and capacities are correct;
- estimator updates;
- Food Tray CTA opens correct destination;
- mobile package layout is usable;
- no horizontal overflow;
- no console errors.

Run checks, update docs, report results, and stop.
