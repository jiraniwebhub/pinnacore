/* ═══════════════════════════════════════════════════════════
   PINNACORE ENTERPRISE — script.js
   Premium Stationery & Office Supplies | Nairobi, Kenya
   Products · Cart · Filter · Search · Sort · WhatsApp
═══════════════════════════════════════════════════════════ */

"use strict";

/* ──────────────────────────────────────────
   CONFIG
────────────────────────────────────────── */
const WHATSAPP_NUMBER = "254722468979"; // ← Replace with your real number
const BRAND_NAME      = "Pinnacore Enterprise";

/* ──────────────────────────────────────────
   PRODUCTS DATABASE  (84 products)
   Real Unsplash image URLs
────────────────────────────────────────── */
const products = [

  /* ════════════════════════════════════
     1. WRITING & OFFICE SUPPLIES
  ════════════════════════════════════ */
  {
    id: 1,
    name: "Whiteboard Markers Set.",
    category: "Writing & Office Supplies",
    price: 350,
    quantity: 120,
    image: "images/Whiteboard Markers Set.jpeg",
    emoji: "🖊️",
    featured: true,
    description: "Vibrant dry-erase markers for classroom and office whiteboards. Smooth ink flow, easy to wipe clean."
  },

  {
    id: 3,
    name: "Whiteboard Marker ",
    category: "Writing & Office Supplies",
    price: 70,
    quantity: 200,
    image: "images/Whiteboard Marker Ink Refill.jpeg",
    emoji: "🖋️",
    featured: false,
    description: "Compatible refill ink for most whiteboard markers. 30ml bottle. Black, red, blue available."
  },
  {
    id: 4,
    name: "Permanent Markers (12 Pcs)",
    category: "Writing & Office Supplies",
    price: 150,
    quantity: 150,
    image: "images/Permanent Markers (12 Pcs).jpeg",
    emoji: "🖍️",
    featured: false,
    description: "Waterproof, fade-resistant permanent markers. Marks on paper, plastic, glass and metal."
  },
  {
    id: 5,
    name: "Premium Marker Pens Set (36 Colours)",
    category: "Writing & Office Supplies",
    price: 540,
    quantity: 60,
    image: "images/Premium Marker Pens Set (36 Colours).jpeg",
    emoji: "🎨",
    featured: true,
    description: "36-colour professional marker set. Dual tip: fine and chisel. Ideal for art, charts and presentations."
  },
  {
    id: 6,
    name: "Stainless Steel Metal Ruler 30cm",
    category: "Writing & Office Supplies",
    price: 100,
    quantity: 200,
    image: "images/Stainless Steel Metal Ruler 30cm (1).jpeg",
    emoji: "📏",
    featured: false,
    description: "Heavy-duty stainless steel ruler. Non-slip cork backing. Clear metric and imperial markings."
  },
  {
    id: 7,
    name: "Blackboard Wooden Ruler 1m",
    category: "Writing & Office Supplies",
    price: 100,
    quantity: 90,
    image: "images/Blackboard Wooden Ruler 1m.jpeg",
    emoji: "📐",
    featured: false,
    description: "1-metre hardwood blackboard ruler for classroom use. Clear numbered markings on both sides."
  },
  {
    id: 8,
    name: "Paperclips Assorted (1000 Pcs)",
    category: "Writing & Office Supplies",
    price: 350,
    quantity: 100,
    image: "images/Paperclips Assorted (1000 Pcs).jpeg",
    emoji: "📎",
    featured: false,
    description: "Assorted size paperclips in a dispenser box. Rust-resistant steel, smooth finish."
  },
  {
    id: 9,
    name: "images/Office Pins _ Push Pins (100 Pcs).jpeg",
    category: "Writing & Office Supplies",
    price: 50,
    quantity: 300,
    image: "images/Office Pins _ Push Pins (100 Pcs).jpeg",
    emoji: "📌",
    featured: false,
    description: "100-pack colourful push pins. Sharp steel point, easy-grip plastic head. Ideal for notice boards."
  },
  {
    id: 10,
    name: "Desktop Heavy-Duty Stapler",
    category: "Writing & Office Supplies",
    price: 650,
    quantity: 55,
    image: "images/Desktop Heavy-Duty Stapler.jpeg",
    emoji: "📋",
    featured: true,
    description: "Jam-proof desktop stapler. Staples up to 25 sheets. Non-slip rubber base. Includes starter staples."
  },
  {
    id: 11,
    name: "Stamp Ink Pad",
    category: "Writing & Office Supplies",
    price: 350,
    quantity: 70,
    image: "images/Stamp Ink Pad.jpeg",
    emoji: "🔏",
    featured: false,
    description: "Premium stamp ink pad. Fast-drying, smear-resistant. Available in blue, red and black."
  },
  {
    id: 12,
    name: "Endorsing Ink Bottle",
    category: "Writing & Office Supplies",
    price: 70,
    quantity: 150,
    image: "images/Endorsing Ink Bottle.jpeg",
    emoji: "💧",
    featured: false,
    description: "High-quality endorsing ink for stamp pads. 30ml bottle, waterproof formula."
  },
  {
    id: 13,
    name: "Office Glue Stick Premium",
    category: "Writing & Office Supplies",
    price: 150,
    quantity: 180,
    image: "images/Office Glue Stick Premium.jpeg",
    emoji: "🧴",
    featured: false,
    description: "Strong acid-free glue stick. Non-toxic, clear drying. Ideal for paper, cardboard and photos."
  },
  {
    id: 14,
    name: "Professional Scissors Set",
    category: "Writing & Office Supplies",
    price: 200,
    quantity: 110,
    image: "images/Professional Scissors Set.jpeg",
    emoji: "✂️",
    featured: false,
    description: "Stainless steel scissors with ergonomic soft-grip handles. Sharp blades for precise cuts."
  },
  {
    id: 15,
    name: "Scientific Calculator 240 Functions",
    category: "Writing & Office Supplies",
    price: 1200,
    quantity: 45,
    image: "images/Scientific Calculator 240 Functions.jpeg",
    emoji: "🔢",
    featured: true,
    description: "240+ functions scientific calculator. Solar + battery dual power. Ideal for students and engineers."
  },
  {
    id: 16,
    name: "Technical Drawing Set (10 Pcs)",
    category: "Writing & Office Supplies",
    price: 600,
    quantity: 75,
    image: "images/Technical Drawing Set (10 Pcs).jpeg",
    emoji: "📐",
    featured: false,
    description: "Complete 10-piece geometry set. Compass, protractor, set squares and rulers. Includes carry case."
  },

  /* ════════════════════════════════════
     2. SCHOOL SUPPLIES
  ════════════════════════════════════ */
  {
    id: 17,
    name: "Exercise Books Pack (10 Pcs)",
    category: "School Supplies",
    price: 280,
    quantity: 200,
    image: "images/Exercise Books Pack (10 Pcs).jpeg",
    emoji: "📓",
    featured: true,
    description: "A4 96-page ruled exercise books. Durable covers, quality 70gsm paper. Pack of 10."
  },
  {
    id: 18,
    name: "Book Covers Assorted Pack (12)",
    category: "School Supplies",
    price: 150,
    quantity: 160,
    image: "images/Book Covers Assorted Pack.jpeg",
    emoji: "📚",
    featured: false,
    description: "Protective PVC book covers in assorted colours. Self-adhesive, transparent. Pack of 12."
  },
  {
    id: 19,
    name: "Educational Wall Charts",
    category: "School Supplies",
    price: 100,
    quantity: 90,
    image: "images/Educational Wall Charts.jpeg",
    emoji: "📊",
    featured: false,
    description: "Full-colour laminated educational charts. Alphabet, numbers, maps, science topics. A2 size."
  },
  {
    id: 20,
    name: "Student Geometry Set (7 Pcs)",
    category: "School Supplies",
    price: 150,
    quantity: 120,
    image: "images/Student Geometry Set (7 Pcs).jpeg",
    emoji: "📐",
    featured: false,
    description: "7-piece geometry set in zip pouch. Compass, protractor, rulers and set squares."
  },
  {
    id: 21,
    name: "Teacher's Wooden Geometry Set",
    category: "School Supplies",
    price: 350,
    quantity: 40,
    image: "images/Teacher's Wooden Geometry Set.jpeg",
    emoji: "📏",
    featured: true,
    description: "Large-scale wooden geometry tools for blackboard teaching. Set of 5 pieces. Durable hardwood."
  },
  {
    id: 22,
    name: "White Chalk Box (10 Pcs)",
    category: "School Supplies",
    price: 700,
    quantity: 60,
    image: "images/White Chalk Box (100 Pcs).jpeg",
    emoji: "🖊️",
    featured: false,
    description: "Premium white chalk sticks for blackboard use. Dust-free formula, smooth writing. Box of 100."
  },
  {
    id: 23,
    name: "Dust-Free Board Eraser",
    category: "School Supplies",
    price: 100,
    quantity: 130,
    image: "images/Dust-Free Board Eraser.jpeg",
    emoji: "🧹",
    featured: false,
    description: "Anti-dust felt board eraser. Ergonomic wood handle. Erases chalk cleanly without mess."
  },
  {
    id: 24,
    name: "Nataraj Sharpener & Eraser Set",
    category: "School Supplies",
    price: 350,
    quantity: 180,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    emoji: "✏️",
    featured: false,
    description: "Pack of 12 pencils with matching erasers and sharpeners. Ideal school starter set."
  },
  {
    id: 25,
    name: "Ruled Papers — 500 Sheets",
    category: "School Supplies",
    price: 550,
    quantity: 70,
    image: "images/Ruled Papers — 500 Sheets (1).jpeg",
    emoji: "📄",
    featured: false,
    description: "A4 ruled loose-leaf paper. 80gsm bright white. 500 sheets. Perfect for notes and assignments."
  },
  {
    id: 26,
    name: "Manila Paper Ream (100 Sheets)",
    category: "School Supplies",
    price: 1400,
    quantity: 35,
    image: "images/Manila Paper Ream.jpeg",
    emoji: "📃",
    featured: false,
    description: "Brown manila paper for crafts and packaging. 45gsm. 100 sheets per ream."
  },
  {
    id: 27,
    name: "Petty Cash Voucher Book",
    category: "School Supplies",
    price: 50,
    quantity: 250,
    image: "images/Petty Cash Voucher Book.jpeg",
    emoji: "📒",
    featured: false,
    description: "50-leaf carbonless petty cash voucher book. Official format. Numbered for easy tracking."
  },
  {
    id: 28,
    name: "Salary Voucher Book",
    category: "School Supplies",
    price: 50,
    quantity: 200,
    image: "images/Salary Voucher Book.jpeg",
    emoji: "💼",
    featured: false,
    description: "50-leaf salary/wages voucher book. Printed in duplicate. Standard payroll format."
  },
  {
    id: 29,
    name: "Exam Revision Booklet",
    category: "School Supplies",
    price: 80,
    quantity: 300,
    image: "images/Exam Revision Booklet.jpeg",
    emoji: "📝",
    featured: false,
    description: "A4 revision answer booklet. 16 pages, ruled and numbered. Used by candidates in exams."
  },

  /* ════════════════════════════════════
     3. ART & CRAFT SUPPLIES
  ════════════════════════════════════ */
  {
    id: 30,
    name: "Colouring Crayons Set (24 Colours)",
    category: "Art & Craft Supplies",
    price: 250,
    quantity: 140,
    image: "images/Colouring Crayons Set (24 Colours).jpeg",
    emoji: "🖍️",
    featured: true,
    description: "24 vibrant wax crayons. Smooth colour laydown, break-resistant. Safe for children aged 3+."
  },
  {
    id: 31,
    name: "Watercolour Paint Set (12 Colours)",
    category: "Art & Craft Supplies",
    price: 350,
    quantity: 90,
    image: "images/Watercolour Paint Set (12 Colours).jpeg",
    emoji: "🎨",
    featured: true,
    description: "12 professional watercolour pans. Rich pigmentation, easy re-wetting. Includes mixing palette and brush."
  },
  {
    id: 32,
    name: "Drawing Ink — Black India Ink",
    category: "Art & Craft Supplies",
    price: 550,
    quantity: 55,
    image: "images/Drawing Ink — Black India Ink.jpeg",
    emoji: "🖋️",
    featured: false,
    description: "Premium black India drawing ink. Waterproof, archival quality. 60ml bottle."
  },
  {
    id: 33,
    name: "Artist Point Brushes Set (6 Pcs)",
    category: "Art & Craft Supplies",
    price: 50,
    quantity: 200,
    image: "images/Artist Point Brushes Set (6 Pcs).jpeg",
    emoji: "🖌️",
    featured: false,
    description: "Set of 6 nylon point brushes in sizes 1, 2, 4, 6, 8, 10. For watercolour, acrylic and oil."
  },
  {
    id: 34,
    name: "Acrylic Liquid Paint Set (12 Colours)",
    category: "Art & Craft Supplies",
    price: 750,
    quantity: 45,
    image: "images/Acrylic Liquid Paint Set (12 Colours).jpeg",
    emoji: "🎨",
    featured: true,
    description: "12 colours, 20ml tubes. Fast-drying, flexible when dry. Works on canvas, paper, wood and fabric."
  },
  {
    id: 35,
    name: "Oil Paint Professional Set",
    category: "Art & Craft Supplies",
    price: 750,
    quantity: 30,
    image: "images/Oil Paint Professional Set.jpeg",
    emoji: "🖼️",
    featured: false,
    description: "12 professional oil paint tubes. Rich pigments, slow-drying for blending. Lightfast and permanent."
  },
  {
    id: 36,
    name: "Glass Paint Set (8 Colours)",
    category: "Art & Craft Supplies",
    price: 750,
    quantity: 25,
    image: "images/Glass Paint Set (8 Colours).jpeg",
    emoji: "🔮",
    featured: false,
    description: "Translucent glass paint in 8 colours. No baking required. Vibrant finish on glass and ceramics."
  },
  {
    id: 37,
    name: "Hair Beads Assorted Pack (200 Pcs)",
    category: "Art & Craft Supplies",
    price: 100,
    quantity: 150,
    image: "images/Hair Beads Assorted Pack (200 Pcs).jpeg",
    emoji: "💎",
    featured: false,
    description: "Assorted colourful hair beads. 200 pieces per pack. Mix of shapes and sizes for braiding."
  },
  {
    id: 38,
    name: "Food Colouring Set (8 Colours)",
    category: "Art & Craft Supplies",
    price: 300,
    quantity: 80,
    image: "images/Food Colouring Set (8 Colours) (1).jpeg",
    emoji: "🌈",
    featured: false,
    description: "Liquid food colouring in 8 vivid shades. Odourless, tasteless, safe for baking and cooking."
  },

  /* ════════════════════════════════════
     4. OFFICE MACHINES
  ════════════════════════════════════ */
  {
    id: 39,
    name: "Comb Binding Machine",
    category: "Office Machines",
    price: 4500,
    quantity: 15,
    image: "images/Comb Binding Machine.jpeg",
    emoji: "🖨️",
    featured: true,
    description: "Professional comb binding machine. Binds up to 450 sheets. 21-hole punch. Includes starter combs."
  },
  {
    id: 40,
    name: "Heavy-Duty Paper Cutter A4",
    category: "Office Machines",
    price: 1500,
    quantity: 20,
    image: "images/Heavy-Duty Paper Cutter A4.jpeg",
    emoji: "✂️",
    featured: false,
    description: "Precision guillotine paper cutter. Cuts up to 10 sheets. Safety guard included."
  },
  {
    id: 41,
    name: "Wireless Inkjet Colour Printer",
    category: "Office Machines",
    price: 2500,
    quantity: 10,
    image: "images/Wireless-Inkjet-Colour-Printer.jpeg",
    emoji: "🖨️",
    featured: true,
    description: "Wireless inkjet printer. Print, scan and copy. Up to 10ppm colour, 20ppm mono. Wi-Fi enabled."
  },
  {
    id: 42,
    name: "Impulse Heat Sealer 30cm",
    category: "Office Machines",
    price: 1800,
    quantity: 18,
    image: "images/Impulse Heat Sealer 30cm.jpeg",
    emoji: "⚙️",
    featured: false,
    description: "30cm impulse sealer for plastic bags and packaging. One-touch operation, adjustable timer."
  },
  {
    id: 43,
    name: "Laminating Pouch Film A4 (100 Pcs)",
    category: "Office Machines",
    price: 800,
    quantity: 60,
    image: "images/Laminating Pouch Film A4 (100 Pcs).jpeg",
    emoji: "📄",
    featured: false,
    description: "A4 glossy laminating pouches. 80 microns, crystal clear finish. Compatible with all A4 laminators."
  },
  {
    id: 44,
    name: "Rotary Paper Trimmer / Gutter",
    category: "Office Machines",
    price: 11500,
    quantity: 5,
    image: "images/Rotary Paper Trimmer _ Gutter (1).jpeg",
    emoji: "🔧",
    featured: false,
    description: "Professional rotary trimmer. 45cm cutting length, self-sharpening blade. Ideal for print shops."
  },

  /* ════════════════════════════════════
     5. SPORTS & GAMES
  ════════════════════════════════════ */
  {
    id: 45,
    name: "Official Size Football",
    category: "Sports & Games",
    price: 1000 - 2500,
    quantity: 50,
    image: "images/Official Size Football.jpeg",
    emoji: "⚽",
    featured: true,
    description: "Size 5 laminated football. Machine-stitched, durable PVC panels. For grass and hard courts."
  },
  {
    id: 46,
    name: "Speed Jump Skipping Rope",
    category: "Sports & Games",
    price: 150,
    quantity: 100,
    image: "images/Speed Jump Skipping Rope.jpeg",
    emoji: "🪢",
    featured: false,
    description: "Adjustable speed jump rope. Ball-bearing handles for smooth rotation. Suitable for all ages."
  },
  {
    id: 47,
    name: "Sisal Dartboard Sport Set",
    category: "Sports & Games",
    price: 1100,
    quantity: 30,
    image: "images/Sisal Dartboard Sport Set.jpeg",
    emoji: "🎯",
    featured: false,
    description: "Sisal fibre dartboard with 6 steel-tip darts. 45cm diameter. Includes mounting kit."
  },
  {
    id: 48,
    name: "Classic Scrabble Board Game",
    category: "Sports & Games",
    price: 650,
    quantity: 35,
    image: "images/Classic Scrabble Board Game.jpeg",
    emoji: "🔤",
    featured: true,
    description: "Classic Scrabble word game. 100 letter tiles, premium board, 4 tile racks. 2–4 players."
  },
  {
    id: 49,
    name: "Snakes & Ladders Board Game",
    category: "Sports & Games",
    price: 1100,
    quantity: 40,
    image: "images/Snakes & Ladders Board Game.jpeg",
    emoji: "🐍",
    featured: false,
    description: "Family snakes and ladders set. Large laminated board. Colourful pawns and dice included."
  },
  {
    id: 50,
    name: "Kids Acoustic Toy Guitar",
    category: "Sports & Games",
    price: 350,
    quantity: 55,
    image: "images/Kids Acoustic Toy Guitar.jpeg",
    emoji: "🎸",
    featured: false,
    description: "Colourful 6-string acoustic toy guitar for children. Tunable, real sound. Age 4+."
  },
  {
    id: 51,
    name: "Kids Wooden Building Blocks (100 Pcs)",
    category: "Sports & Games",
    price: 600,
    quantity: 60,
    image: "images/Kids Wooden Building Blocks (100 Pcs).jpeg",
    emoji: "🧱",
    featured: false,
    description: "100-piece wooden building blocks. Shapes, colours and letters. Encourages creativity in toddlers."
  },
  {
    id: 52,
    name: "LEGO-Compatible Bricks Set (200 Pcs)",
    category: "Sports & Games",
    price: 500,
    quantity: 45,
    image: "images/LEGO-Compatible Bricks Set (200 Pcs).jpeg",
    emoji: "🧩",
    featured: true,
    description: "200-piece brick set. Bright colours, compatible with major brick brands. Age 3+."
  },
  {
    id: 53,
    name: "Glass Marbles Bag (50 Pcs)",
    category: "Sports & Games",
    price: 150,
    quantity: 120,
    image: "images/Glass Marbles Bag (50 Pcs).jpeg",
    emoji: "🔵",
    featured: false,
    description: "Traditional glass marbles in assorted colours and sizes. 50 pieces in a drawstring bag."
  },

  /* ════════════════════════════════════
     6. ADHESIVES & TAPES
  ════════════════════════════════════ */
  {
    id: 54,
    name: "Heavy-Duty Duct Tape 50mm",
    category: "Adhesives & Tapes",
    price: 170,
    quantity: 100,
    image: "images/Heavy-Duty Duct Tape 50mm.jpeg",
    emoji: "🎗️",
    featured: false,
    description: "50mm wide duct tape. Super strong, waterproof, tear by hand. For repairs and sealing."
  },
  {
    id: 55,
    name: "Clear Cellotape Rolls (6 Pack)",
    category: "Adhesives & Tapes",
    price: 60,
    quantity: 200,
    image: "images/Clear Cellotape Rolls (6 Pack).jpeg",
    emoji: "📦",
    featured: false,
    description: "6-roll pack of clear cellulose tape. 19mm × 33m each. Transparent, acid-free and easy-tear."
  },
  {
    id: 56,
    name: "Super Glue (5-Pack)",
    category: "Adhesives & Tapes",
    price: 180,
    quantity: 150,
    image: "images/Super Glue (5-Pack).jpeg",
    emoji: "🧲",
    featured: false,
    description: "Instant-bond cyanoacrylate super glue. Bonds in seconds. Works on metal, ceramic, rubber and plastic."
  },
  {
    id: 57,
    name: "Mini Hot Melt Glue Gun",
    category: "Adhesives & Tapes",
    price: 650,
    quantity: 60,
    image: "images/Mini Hot Melt Glue Gun.jpeg",
    emoji: "🔫",
    featured: true,
    description: "Electric hot melt glue gun. Heats in 3 minutes. Anti-drip nozzle. Includes 10 glue sticks."
  },
  {
    id: 58,
    name: "Metal Heavy-Duty Glue Gun",
    category: "Adhesives & Tapes",
    price: 2500,
    quantity: 15,
    image: "images/Metal Heavy-Duty Glue Gun.jpeg",
    emoji: "🔧",
    featured: false,
    description: "Professional metal barrel glue gun. Full-size, high-temp. For industrial and craft applications."
  },
  {
    id: 59,
    name: "Hot Melt Glue Sticks (50 Pcs)",
    category: "Adhesives & Tapes",
    price: 150,
    quantity: 100,
    image: "images/Hot Melt Glue Sticks (50 Pcs).jpeg",
    emoji: "🕯️",
    featured: false,
    description: "Standard 7mm diameter hot glue sticks. Compatible with most mini and full-size glue guns."
  },
  {
    id: 60,
    name: "Book Binding Glue 5KG",
    category: "Adhesives & Tapes",
    price: 650,
    quantity: 25,
    image: "images/Book Binding Glue 5KG.jpeg",
    emoji: "📚",
    featured: false,
    description: "Professional PVA book binding glue. 5KG tub. Flexible bond, dries clear."
  },
  {
    id: 61,
    name: "White Document Tape 25mm",
    category: "Adhesives & Tapes",
    price: 150,
    quantity: 80,
    image: "images/White Document Tape 25mm.jpeg",
    emoji: "📋",
    featured: false,
    description: "White self-adhesive document tape. 25mm wide. For binding, labelling and document repair."
  },

  /* ════════════════════════════════════
     7. FILES & STORAGE
  ════════════════════════════════════ */
  {
    id: 62,
    name: "Document Wallet A4",
    category: "Files & Storage",
    price: 40,
    quantity: 400,
    image: "images/Document Wallet A4.jpeg",
    emoji: "📁",
    featured: false,
    description: "Clear PVC A4 document wallet. Strong press-stud closure. Holds up to 30 sheets."
  },
  {
    id: 63,
    name: "Pocket Presentation File (40 Pockets)",
    category: "Files & Storage",
    price: 70,
    quantity: 250,
    image: "images/Pocket Presentation File (40 Pockets).jpeg",
    emoji: "📂",
    featured: false,
    description: "40-pocket A4 presentation file. Numbered tabs, non-glare pockets. Professional ring binder."
  },
  {
    id: 64,
    name: "C5 White Envelopes Box (1000 Pcs)",
    category: "Files & Storage",
    price: 2200,
    quantity: 20,
    image: "images/C5 White Envelopes Box (1000 Pcs).jpeg",
    emoji: "✉️",
    featured: true,
    description: "C5 white self-seal envelopes. 90gsm, banker style. 1000 per box. For official correspondence."
  },
  {
    id: 65,
    name: "Record Index Cards (200 Pcs)",
    category: "Files & Storage",
    price: 300,
    quantity: 60,
    image: "images/Record Index Cards (200 Pcs).jpeg",
    emoji: "🗃️",
    featured: false,
    description: "A6 index/record cards. Ruled on one side, blank on other. 200 cards in assorted colours."
  },

  /* ════════════════════════════════════
     8. TEACHING MATERIALS
  ════════════════════════════════════ */
  {
    id: 66,
    name: "Kenyan National Flag 90×150cm(1)",
    category: "Teaching Materials",
    price: 2000,
    quantity: 30,
    image: "images/Kenyan National Flag 90×150cm (1).jpeg",
    emoji: "🇰🇪",
    featured: true,
    description: "Official Kenyan flag. 90×150cm, polyester fabric. Vivid colours, weatherproof. Includes sleeve."
  },
  {
    id: 67,
    name: "East African Community Flag",
    category: "Teaching Materials",
    price: 2500,
    quantity: 20,
    image: "images/East African Community Flag.jpeg",
    emoji: "🌍",
    featured: false,
    description: "EAC flag. 90×150cm, durable polyester. For schools, offices and ceremonies."
  },
  {
    id: 68,
    name: "Electric School Bell 240V",
    category: "Teaching Materials",
    price: 1800,
    quantity: 25,
    image: "images/Electric School Bell 240V.jpeg",
    emoji: "🔔",
    featured: false,
    description: "240V electric school bell. 150mm chrome bell, loud and clear ring. Easy wall mounting."
  },
  {
    id: 69,
    name: "Felt Board Duster",
    category: "Teaching Materials",
    price: 100,
    quantity: 150,
    image: "images/Felt Board Duster.jpeg",
    emoji: "🧹",
    featured: false,
    description: "Premium felt board duster for blackboards and whiteboards. Ergonomic wooden handle."
  },

  /* ════════════════════════════════════
     9. TOYS & KIDS ITEMS
  ════════════════════════════════════ */
  {
    id: 70,
    name: "Creative Kids Playdough Set (8 Colours)",
    category: "Toys & Kids Items",
    price: 350,
    quantity: 70,
    image: "images/Creative Kids Playdough Set (8 Colours).jpeg",
    emoji: "🌈",
    featured: true,
    description: "8-colour playdough set with moulds and tools. Non-toxic, air-dry formula. Ages 3+."
  },
  {
    id: 71,
    name: "Jumbo Colouring Crayons (12 Pcs)",
    category: "Toys & Kids Items",
    price: 60,
    quantity: 200,
    image: "images/Jumbo Colouring Crayons (12 Pcs).jpeg",
    emoji: "🖍️",
    featured: false,
    description: "Thick jumbo crayons for toddlers. Non-toxic, washable. Easy to grip, vibrant colours."
  },
  {
    id: 72,
    name: "Kids Jigsaw Puzzle (100 Pieces)",
    category: "Toys & Kids Items",
    price: 450,
    quantity: 50,
    image: "images/Kids Jigsaw Puzzle (100 Pieces).jpeg",
    emoji: "🧩",
    featured: false,
    description: "100-piece animal-themed jigsaw puzzle. Large pieces, thick cardboard. Ages 5+."
  },
  {
    id: 73,
    name: "Washable Finger Paints Set (6 Colours)",
    category: "Toys & Kids Items",
    price: 280,
    quantity: 80,
    image: "images/Washable Finger Paints Set (6 Colours).jpeg",
    emoji: "🎨",
    featured: false,
    description: "Washable finger paints in 6 colours. Safe for children. 30ml pots. For early creativity."
  },

  /* ════════════════════════════════════
     10. GENERAL ACCESSORIES
  ════════════════════════════════════ */
  {
    id: 74,
    name: "Protective Face Masks (50 Pack)",
    category: "General Accessories",
    price: 150,
    quantity: 200,
    image: "images/Protective Face Masks (50 Pack).jpeg",
    emoji: "😷",
    featured: false,
    description: "3-ply disposable face masks. Comfortable elastic ear loops. BFE ≥95%. Pack of 50."
  },
  {
    id: 75,
    name: "Hand Tally Counter (4-Digit)",
    category: "General Accessories",
    price: 450,
    quantity: 60,
    image: "images/Hand Tally Counter (4-Digit).jpeg",
    emoji: "🔢",
    featured: false,
    description: "Mechanical hand tally counter. 4-digit display, up to 9999. Reset button. For events and counting."
  },
  {
    id: 76,
    name: "Bicycle Floor Pump with Gauge",
    category: "General Accessories",
    price: 250,
    quantity: 55,
    image: "images/Bicycle Floor Pump with Gauge (1).jpeg",
    emoji: "🚲",
    featured: false,
    description: "Compact floor pump with pressure gauge. Compatible with Presta and Schrader valves."
  },
  {
    id: 77,
    name: "Premium Metal Mesh Pen Holder",
    category: "General Accessories",
    price: 550,
    quantity: 75,
    image: "images/Premium Metal Mesh Pen Holder.jpeg",
    emoji: "✏️",
    featured: true,
    description: "Elegant metal mesh pen holder. Multi-compartment design, weighted base. Brushed steel finish."
  },
  {
    id: 78,
    name: "Sports Wristbands Pair",
    category: "General Accessories",
    price: 20,
    quantity: 300,
    image: "images/Sports Wristbands Pair.jpeg",
    emoji: "💪",
    featured: false,
    description: "Absorbent terry cloth wristbands. One size fits all. White, black and assorted colours."
  },
  {
    id: 79,
    name: "Metal Coach Whistle with Lanyard",
    category: "General Accessories",
    price: 50,
    quantity: 200,
    image: "images/Metal Coach Whistle with Lanyard.jpeg",
    emoji: "🎵",
    featured: false,
    description: "Loud referee/coach whistle. Nickel-plated steel. Includes lanyard cord. Ear-piercing clear tone."
  },
  {
    id: 80,
    name: "Assorted Reward Stickers (200 Pcs)",
    category: "General Accessories",
    price: 100,
    quantity: 180,
    image: "images/Assorted Reward Stickers (200 Pcs).jpeg",
    emoji: "⭐",
    featured: false,
    description: "200 assorted reward and decorative stickers. Stars, hearts, animals and motivational stickers."
  },
  {
    id: 81,
    name: "Latex Balloons Assorted (50 Pcs)",
    category: "General Accessories",
    price: 180,
    quantity: 150,
    image: "images/Latex Balloons Assorted (50 Pcs).jpeg",
    emoji: "🎈",
    featured: false,
    description: "50 assorted colour latex balloons. 11-inch when inflated. For parties, celebrations and events."
  },
  {
    id: 82,
    name: "Satin Cotton Ribbon Roll 25mm",
    category: "General Accessories",
    price: 350,
    quantity: 100,
    image: "images/Satin Cotton Ribbon Roll 25mm.jpeg",
    emoji: "🎀",
    featured: false,
    description: "25mm satin ribbon, 10-metre roll. Smooth finish, vibrant colour. For gift wrapping and crafts."
  },
  {
    id: 83,
    name: "Metallic Curling Ribbon Disk Spool",
    category: "General Accessories",
    price: 250,
    quantity: 80,
    image: "images/Metallic Curling Ribbon Disk Spool.jpeg",
    emoji: "🌀",
    featured: false,
    description: "Curling ribbon disk spool. 500 yards, assorted metallic colours. For gift wrapping."
  },
  {
    id: 84,
    name: "C6 White Inkjet Printer Cartridge",
    category: "General Accessories",
    price: 1100,
    quantity: 35,
    image: "images/C6 White Inkjet Printer Cartridge.jpeg",
    emoji: "🖨️",
    featured: false,
    description: "Compatible C6 white inkjet cartridge. High-yield, 300+ pages. Works with most HP printers."
  }
];

/* ──────────────────────────────────────────
   STATE
────────────────────────────────────────── */
let cart            = [];
let activeCategory  = "All";
let searchQuery     = "";
let sortOrder       = "default";

/* ──────────────────────────────────────────
   DOM HELPER
────────────────────────────────────────── */
const $ = id => document.getElementById(id);

/* ══════════════════════════════════════════
   CATEGORIES
══════════════════════════════════════════ */
function getCategories() {
  return ["All", ...new Set(products.map(p => p.category))];
}

function countByCategory(cat) {
  return cat === "All"
    ? products.length
    : products.filter(p => p.category === cat).length;
}

function buildCategoryList() {
  const list = $("categoryList");
  if (!list) return;
  list.innerHTML = getCategories().map(cat => `
    <li>
      <button class="${cat === activeCategory ? "active" : ""}" data-cat="${cat}">
        <span class="cat-label">${cat}</span>
        <span class="cat-count">${countByCategory(cat)}</span>
      </button>
    </li>`).join("");

  list.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      searchQuery    = "";
      const sb = $("searchBar");
      if (sb) sb.value = "";
      renderProductsGrid();
      buildCategoryList();
      buildMobileCategories();
      scrollToShop();
    });
  });

  buildMobileCategories();
}

function buildMobileCategories() {
  const wrap = $("mobCategories");
  if (!wrap) return;
  wrap.innerHTML = `<h4>Categories</h4>` +
    getCategories().map(cat => `
      <button class="mob-cat-btn ${cat === activeCategory ? "active" : ""}" data-cat="${cat}">
        ${cat}
      </button>`).join("");

  wrap.querySelectorAll(".mob-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      searchQuery    = "";
      const sb = $("searchBar");
      if (sb) sb.value = "";
      closeMobileNav();
      renderProductsGrid();
      buildCategoryList();
      buildMobileCategories();
      scrollToShop();
    });
  });
}

function scrollToShop() {
  const shop = $("shop");
  if (shop) window.scrollTo({ top: shop.offsetTop - 90, behavior: "smooth" });
}

/* ══════════════════════════════════════════
   FILTER & SORT
══════════════════════════════════════════ */
function getFilteredProducts() {
  let list = products.filter(p => {
    const q   = searchQuery.toLowerCase();
    const cat = activeCategory === "All" || p.category === activeCategory;
    const src = p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q);
    return cat && src;
  });

  if (sortOrder === "price-asc")  list.sort((a, b) => a.price - b.price);
  if (sortOrder === "price-desc") list.sort((a, b) => b.price - a.price);
  if (sortOrder === "name")       list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

/* ══════════════════════════════════════════
   PRODUCT CARD HTML
══════════════════════════════════════════ */
function buildCard(product, isFeatured = false) {
  const isLow  = product.quantity > 0 && product.quantity <= 5;
  const isOut  = product.quantity === 0;
  const stockTxt = isOut ? "Out of Stock"
                 : isLow ? `Only ${product.quantity} left!`
                 :         `${product.quantity} in stock`;
  const stockCls = isOut ? "out" : isLow ? "low" : "";

  return `
    <div class="product-card${isFeatured ? " featured-card" : ""}" data-id="${product.id}">
      ${product.featured ? `<span class="product-badge">⭐ Featured</span>` : ""}
      ${isLow && !isOut  ? `<span class="badge-low">Low Stock</span>`       : ""}
      ${isOut            ? `<span class="badge-out">Sold Out</span>`         : ""}

      <div class="product-img-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
onerror="
this.style.display='none';
this.nextElementSibling.style.display='flex';
this.parentElement.classList.add('fallback-active');
"        />
        <span class="product-emoji-fallback" style="display:none">${product.emoji}</span>
      </div>

      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-meta">
          <span class="product-price">KSh ${product.price.toLocaleString()}</span>
          <span class="product-stock ${stockCls}">${stockTxt}</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart${isOut ? " disabled" : ""}"
                  data-id="${product.id}"
                  ${isOut ? "disabled" : ""}>
            ${isOut ? "Unavailable" : "Add to Cart"}
          </button>
          <a class="btn-wa-order"
             href="${buildSingleWhatsApp(product)}"
             target="_blank"
             rel="noopener"
             title="Order via WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════
   WHATSAPP MESSAGES
══════════════════════════════════════════ */
function buildSingleWhatsApp(product) {
  const msg =
    `Hello ${BRAND_NAME},\n\n` +
    `I would like to order:\n` +
    `• *${product.name}* × 1\n\n` +
    `Total: *KSh ${product.price.toLocaleString()}*\n\n` +
    `Please confirm availability and delivery details. Thank you! 🙏`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function buildCartWhatsApp() {
  if (!cart.length) return "#";
  const lines = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    return `• *${p.name}* × ${item.qty}  —  KSh ${(p.price * item.qty).toLocaleString()}`;
  }).join("\n");
  const total = getCartTotal();
  const msg =
    `Hello ${BRAND_NAME},\n\n` +
    `I would like to place the following order:\n\n` +
    `${lines}\n\n` +
    `*Order Total: KSh ${total.toLocaleString()}*\n\n` +
    `Please confirm and advise on delivery. Thank you! 🛒`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ══════════════════════════════════════════
   RENDER — PRODUCTS GRID
══════════════════════════════════════════ */
function renderProductsGrid() {
  const grid      = $("productsGrid");
  const noResults = $("noResults");
  const countEl   = $("resultsCount");
  if (!grid) return;

  const filtered = getFilteredProducts();

  if (!filtered.length) {
    grid.innerHTML = "";
    if (noResults) noResults.style.display = "block";
    if (countEl)   countEl.textContent = "No products found";
    return;
  }

  if (noResults) noResults.style.display = "none";
  if (countEl) {
    const suffix = activeCategory !== "All"
      ? ` in <strong>${activeCategory}</strong>` : "";
    countEl.innerHTML =
      `Showing <strong>${filtered.length}</strong> product${filtered.length !== 1 ? "s" : ""}${suffix}`;
  }
const isMobile = window.innerWidth < 768;
  grid.innerHTML = filtered.map(p => buildCard(p)).join("");
  attachCardListeners(grid);
  observeCards(grid);
}

/* ══════════════════════════════════════════
   RENDER — FEATURED GRID
══════════════════════════════════════════ */
function renderFeaturedGrid() {
  const grid = $("featuredGrid");

  if (!grid) return;

  const featured = products.filter(p => p.featured);

  grid.innerHTML = featured
    .map(p => buildCard(p, true))
    .join("");

  attachCardListeners(grid);

  observeCards(grid);
}
/* ══════════════════════════════════════════
   CARD LISTENERS
══════════════════════════════════════════ */
function attachCardListeners(container) {
  container.querySelectorAll(".btn-add-cart:not(.disabled)").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      addToCart(id);
      btn.textContent = "✓ Added!";
      btn.classList.add("added");
      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.classList.remove("added");
      }, 1400);
    });
  });
}

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
function observeCards(container) {
  if (!("IntersectionObserver" in window)) {
    container.querySelectorAll(".product-card").forEach(c => c.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  container.querySelectorAll(".product-card").forEach((c, i) => {
    c.style.animationDelay = `${i * 0.045}s`;
    io.observe(c);
  });
}

/* ══════════════════════════════════════════
   CART LOGIC
══════════════════════════════════════════ */
function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  const product  = products.find(p => p.id === id);
  if (!product || product.quantity === 0) return;

  if (existing) {
    if (existing.qty >= product.quantity) {
      showToast(`⚠️ Maximum stock reached for "${product.name}"`);
      return;
    }
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  renderCart();
  openCart();
  showToast(`✓ "${product.name}" added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function changeQty(id, delta) {
  const item    = cart.find(i => i.id === id);
  if (!item) return;
  const product = products.find(p => p.id === id);
  item.qty = Math.max(1, Math.min(item.qty + delta, product.quantity));
  renderCart();
}

function clearCart() {
  if (!cart.length) return;
  if (!confirm("Clear all items from your cart?")) return;
  cart = [];
  renderCart();
}

function getCartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function getCartTotal() {
  return cart.reduce((s, i) => {
    const p = products.find(pr => pr.id === i.id);
    return s + p.price * i.qty;
  }, 0);
}

/* ══════════════════════════════════════════
   RENDER CART
══════════════════════════════════════════ */
function renderCart() {
  const container = $("cartItems");
  const footer    = $("cartFooter");
  const badge     = $("cartBadge");
  const totalEl   = $("cartTotal");
  if (!container) return;

  const count = getCartCount();
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle("visible", count > 0);
  }

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🛒</span>
        <p>Your basket is empty</p>
        <small>Browse our collection and add items</small>
      </div>`;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "flex";
  if (totalEl) totalEl.textContent = `KSh ${getCartTotal().toLocaleString()}`;

  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    return `
      <div class="cart-item" data-id="${p.id}">
        <div class="cart-item-img">
          <img src="${p.image}" alt="${p.name}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
          <span class="ci-emoji-fallback" style="display:none">${p.emoji}</span>
        </div>
        <div class="cart-item-info">
          <p class="cart-item-name">${p.name}</p>
          <p class="cart-item-cat">${p.category}</p>
          <p class="cart-item-price">KSh ${(p.price * item.qty).toLocaleString()}</p>
          <div class="cart-item-qty-row">
            <button class="qty-btn" data-id="${p.id}" data-delta="-1">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" data-id="${p.id}" data-delta="1">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${p.id}" title="Remove">✕</button>
      </div>`;
  }).join("");

  container.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () =>
      changeQty(Number(btn.dataset.id), Number(btn.dataset.delta)));
  });
  container.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
  });

  const wcBtn = $("whatsappCheckout");
  if (wcBtn) wcBtn.onclick = () => window.open(buildCartWhatsApp(), "_blank");
}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ══════════════════════════════════════════
   CART OPEN / CLOSE
══════════════════════════════════════════ */
function openCart() {
  $("cartSidebar")?.classList.add("open");
  $("cartOverlay")?.classList.add("show");
  document.body.style.overflowY = "hidden";
}
function closeCart() {
  $("cartSidebar")?.classList.remove("open");
  $("cartOverlay")?.classList.remove("show");
  document.body.style.overflowY = "";
}

/* ══════════════════════════════════════════
   MOBILE NAV
══════════════════════════════════════════ */
function openMobileNav() {
  $("mobileNav")?.classList.add("open");
  const ov = $("mobileOverlay");
  if (ov) { ov.style.display = "block"; ov.classList.add("show"); }
  document.body.style.overflow = "hidden";
}
function closeMobileNav() {
  $("mobileNav")?.classList.remove("open");
  $("mobileOverlay")?.classList.remove("show");

  setTimeout(() => {
    const ov = $("mobileOverlay");
    if (ov) ov.style.display = "none";
  }, 300);

document.body.style.overflowY = "";}

/* ══════════════════════════════════════════
   SEARCH
══════════════════════════════════════════ */
function openSearch() {
  $("searchBarWrap")?.classList.add("open");
  setTimeout(() => $("searchBar")?.focus(), 200);
}
function closeSearch() {
  $("searchBarWrap")?.classList.remove("open");
}

/* ══════════════════════════════════════════
   SCROLL — HEADER BEHAVIOUR
══════════════════════════════════════════ */
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const header = $("siteHeader");
  if (!header) return;
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 50);
  if (y > lastScroll + 15 && y > 120) header.classList.add("hidden");
 else if (y < lastScroll - 15)       header.classList.remove("hidden");
  lastScroll = y;
}, { passive: true });

/* ══════════════════════════════════════════
   SECTION REVEAL
══════════════════════════════════════════ */
function initSectionReveal() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll(
    ".section-header, .hero-content, .hero-visual, .featured-section, .marquee-wrap, .sidebar-inner"
  ).forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════
   BOOT
══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {


  document.addEventListener("touchstart", () => {}, { passive: true });

  buildCategoryList();
  renderProductsGrid();
  renderFeaturedGrid();
  renderCart();
  initSectionReveal();

  /* Cart */
  $("cartToggle")?.addEventListener("click",  openCart);
  $("cartClose")?.addEventListener("click",   closeCart);
  $("cartOverlay")?.addEventListener("click", closeCart);
  $("clearCart")?.addEventListener("click",   clearCart);
  $("whatsappCheckout")?.addEventListener("click", () =>
    window.open(buildCartWhatsApp(), "_blank"));

  /* Mobile Nav */
  $("mobileMenuBtn")?.addEventListener("click",  openMobileNav);
  $("mobileNavClose")?.addEventListener("click", closeMobileNav);
  $("mobileOverlay")?.addEventListener("click",  closeMobileNav);
  document.querySelectorAll(".mob-link").forEach(a =>
    a.addEventListener("click", closeMobileNav));

  /* Search */
  $("searchToggle")?.addEventListener("click", openSearch);
  $("searchClose")?.addEventListener("click", () => {
    closeSearch();
    searchQuery = "";
    if ($("searchBar")) $("searchBar").value = "";
    buildCategoryList();
    renderProductsGrid();
  });
  $("searchBar")?.addEventListener("input", e => {
    searchQuery    = e.target.value.trim();
    activeCategory = "All";
    buildCategoryList();
    renderProductsGrid();
    if (searchQuery.length > 0) scrollToShop();
  });
  $("searchBar")?.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeSearch();
      searchQuery = "";
      if ($("searchBar")) $("searchBar").value = "";
      buildCategoryList();
      renderProductsGrid();
    }
  });

  /* Sort */
  $("sortSelect")?.addEventListener("change", e => {
    sortOrder = e.target.value;
    renderProductsGrid();
  });

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });
});


/* ═══════════════════════════════════════
   EMERGENCY FIX PATCH (CART + SEARCH)
   Paste at bottom ONLY
══════════════════════════════════════ */

(function () {
  console.log("⚡ Patch loaded: fixing cart + search");

  /* ───────── FIX 1: Remove broken product (id: 9 name bug) ───────── */
  if (typeof products !== "undefined") {
    const badIndex = products.findIndex(p => p.id === 9);
    if (badIndex !== -1 && typeof products[badIndex].name === "string" &&
        products[badIndex].name.includes("images/")) {
      products[badIndex].name = "Office Pins / Push Pins (100 Pcs)";
    }
  }

  /* ───────── FIX 2: Safe search override ───────── */
  const searchBar = document.getElementById("searchBar");
  if (searchBar) {
    searchBar.addEventListener("input", function (e) {
      window.searchQuery = e.target.value.trim();
      window.activeCategory = "All";

      if (typeof buildCategoryList === "function") buildCategoryList();
      if (typeof renderProductsGrid === "function") renderProductsGrid();

      if (window.searchQuery && window.scrollToShop) scrollToShop();
    });
  }

  /* ───────── FIX 3: Fix cart add stability ───────── */
  window.addToCart = function (id) {
    const product = products.find(p => p.id === id);
    if (!product || product.quantity === 0) return;

    const existing = cart.find(i => i.id === id);

    if (existing) {
      if (existing.qty >= product.quantity) {
        showToast(`⚠️ Stock limit reached`);
        return;
      }
      existing.qty++;
    } else {
      cart.push({ id, qty: 1 });
    }

    renderCart();

    setTimeout(() => {
      if (typeof openCart === "function") openCart();
    }, 80);

    showToast(`✓ Added to cart`);
  };

  /* ───────── FIX 4: Prevent search close breaking state ───────── */
  const searchClose = document.getElementById("searchClose");
  if (searchClose) {
    searchClose.addEventListener("click", function () {
      if (typeof closeSearch === "function") closeSearch();

      window.searchQuery = "";
      window.activeCategory = "All";

      const sb = document.getElementById("searchBar");
      if (sb) sb.value = "";

      if (typeof buildCategoryList === "function") buildCategoryList();
      if (typeof renderProductsGrid === "function") renderProductsGrid();
    });
  }

  /* ───────── FIX 5: Mobile nav safety ───────── */
  window.closeMobileNav = function () {
    const nav = document.getElementById("mobileNav");
    const ov = document.getElementById("mobileOverlay");

    if (nav) nav.classList.remove("open");

    if (ov) {
      ov.classList.remove("show");
      setTimeout(() => {
        ov.style.display = "none";
      }, 200);
    }

    document.body.style.overflow = "";
  };

})();


/* ═══════════════════════════════════════
   FINAL CART REPAIR (FOR DEMO STABILITY)
══════════════════════════════════════ */

(function () {

  console.log("🛒 Cart repair patch active");

  /* ───────── FORCE GLOBAL SAFE CART FUNCTION ───────── */
  window.addToCart = function (id) {
    const product = products.find(p => p.id === id);
    if (!product || product.quantity === 0) return;

    if (!window.cart) window.cart = [];

    let existing = window.cart.find(i => i.id === id);

    if (existing) {
      if (existing.qty >= product.quantity) {
        if (typeof showToast === "function") {
          showToast("⚠️ Stock limit reached");
        }
        return;
      }
      existing.qty += 1;
    } else {
      window.cart.push({ id, qty: 1 });
    }

    if (typeof renderCart === "function") {
      renderCart();
    }

    if (typeof openCart === "function") {
      setTimeout(() => openCart(), 100);
    }

    if (typeof showToast === "function") {
      showToast("✓ Added to cart");
    }
  };

  /* ───────── FIX CART TOTAL SAFETY ───────── */
  window.getCartTotal = function () {
    if (!window.cart) return 0;

    return window.cart.reduce((sum, item) => {
      const p = products.find(pr => pr.id === item.id);
      if (!p) return sum;
      return sum + (p.price * item.qty);
    }, 0);
  };

  window.getCartCount = function () {
    if (!window.cart) return 0;
    return window.cart.reduce((s, i) => s + i.qty, 0);
  };

  /* ───────── HARD REFRESH CART UI ───────── */
  function forceCartFix() {
    const badge = document.getElementById("cartBadge");
    if (badge && window.getCartCount) {
      const count = window.getCartCount();
      badge.textContent = count;
      badge.classList.toggle("visible", count > 0);
    }
  }

  setInterval(forceCartFix, 800);

  /* ───────── RE-BIND ALL ADD BUTTONS SAFELY ───────── */
  function rebindButtons() {
    document.querySelectorAll(".btn-add-cart").forEach(btn => {
      btn.onclick = function () {
        const id = Number(this.dataset.id);
        window.addToCart(id);
      };
    });
  }

  setInterval(rebindButtons, 1200);

})();

/* ══════════════════════════════════════════
   CARD LISTENERS — NEW CLEAN VERSION
══════════════════════════════════════════ */
function attachCardListeners(container) {

  const buttons = container.querySelectorAll(".btn-add-cart");

  buttons.forEach(btn => {

    /* remove old broken handlers */
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    /* attach fresh listener */
    newBtn.addEventListener("click", function (e) {

      e.preventDefault();
      e.stopPropagation();

      const id = Number(this.dataset.id);

      const product = products.find(p => p.id === id);

      if (!product || product.quantity === 0) return;

      const existing = cart.find(i => i.id === id);

      if (existing) {

        if (existing.qty >= product.quantity) {
          showToast(`⚠️ Maximum stock reached`);
          return;
        }

        existing.qty++;

      } else {

        cart.push({
          id: id,
          qty: 1
        });

      }

      renderCart();

      setTimeout(() => {
        openCart();
      }, 100);

      this.textContent = "✓ Added!";
      this.classList.add("added");

      setTimeout(() => {

        if (document.body.contains(this)) {
          this.textContent = "Add to Cart";
          this.classList.remove("added");
        }

      }, 1200);

      showToast(`✓ ${product.name} added to cart`);

    });

  });

}

/* ═══════════════════════════════════════
   FORCE CART BUTTON FIX
══════════════════════════════════════ */

document.addEventListener("click", function (e) {

  /* ───────── REMOVE ITEM ───────── */
  const removeBtn = e.target.closest(".cart-item-remove");

  if (removeBtn) {

    e.preventDefault();
    e.stopPropagation();

    const id = Number(removeBtn.dataset.id);

    cart = cart.filter(item => item.id !== id);

    renderCart();

    showToast("🗑️ Item removed");

    return;
  }

  /* ───────── QUANTITY BUTTONS ───────── */
  const qtyBtn = e.target.closest(".qty-btn");

  if (qtyBtn) {

    e.preventDefault();
    e.stopPropagation();

    const id = Number(qtyBtn.dataset.id);
    const delta = Number(qtyBtn.dataset.delta);

    const item = cart.find(i => i.id === id);

    if (!item) return;

    const product = products.find(p => p.id === id);

    item.qty = Math.max(
      1,
      Math.min(item.qty + delta, product.quantity)
    );

    renderCart();

    return;
  }

});

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    const fallback = img.parentElement.querySelector(".product-emoji-fallback");
    if (fallback) fallback.style.display = "flex";
  });
});


function openMobileNav() {
  const nav = document.getElementById("mobileNav");
  const ov = document.getElementById("mobileOverlay");

  if (nav) nav.classList.add("open");
  if (ov) ov.classList.add("show");

  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  const nav = document.getElementById("mobileNav");
  const ov = document.getElementById("mobileOverlay");

  if (nav) nav.classList.remove("open");
  if (ov) ov.classList.remove("show");

  document.body.style.overflow = "";
}

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {

    // hide broken image
    img.style.display = "none";

    // try fallback emoji if exists
    const fallback = img.parentElement?.querySelector(".product-emoji-fallback");
    if (fallback) {
      fallback.style.display = "flex";
    }

    // final fallback placeholder
    if (!fallback) {
      img.src = "https://via.placeholder.com/400x400?text=No+Image";
      img.style.display = "block";
    }

  });
});

/* ═══════════════════════════════════════
   IMAGE SAFETY PATCH (GLOBAL FIX)
══════════════════════════════════════ */

(function () {
  console.log("🖼️ Image safety patch active");

  function fixImages() {
    document.querySelectorAll("img").forEach(img => {

      // If image fails → fallback instantly
      img.onerror = function () {

        // Hide broken image
        this.style.display = "none";

        // Show fallback emoji if exists
        const fallback = this.parentElement?.querySelector(".product-emoji-fallback");
        if (fallback) {
          fallback.style.display = "flex";
        }

        // Optional: replace with default image if you have one
        // this.src = "images/fallback.jpg";
      };

    });
  }

  // Run now
  fixImages();

  // Also run again after DOM updates (VERY IMPORTANT for your cart/shop)
  const observer = new MutationObserver(() => {
    fixImages();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();