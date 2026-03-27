// ─── Summit Dental Group: Blog Articles Data ─────────────────────────────────
// All 10 articles. Add new articles here; pages are auto-generated.

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  readTime: number;
  date: string;
  author: string;
  authorTitle: string;
  excerpt: string;
  sections: ArticleSection[];
  relatedSlugs: string[];
};

export const ARTICLES: Article[] = [

  // ─── 1: Dental Implants ──────────────────────────────────────────────────────
  {
    slug: 'dental-implants-kalispell-mt',
    title: 'Dental Implants in Kalispell, MT: What to Expect, What They Cost, and How to Choose the Right Dentist',
    description: 'A complete guide to dental implants in Kalispell, Montana — cost, process, candidacy, and what to look for in a Flathead Valley implant dentist.',
    category: 'Dental Implants',
    categorySlug: 'implants',
    readTime: 7,
    date: '2026-03-10',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Dental implants are the gold standard for replacing missing teeth — but the process, the cost, and choosing the right provider can feel overwhelming. Here\'s what patients in Kalispell and the Flathead Valley need to know before making a decision.',
    sections: [
      {
        paragraphs: [
          'For most patients I see here in Kalispell, the questions about implants aren\'t about whether they work — patients generally know they do. The questions are about cost, the process, how long it takes, and whether the investment is worth it for their specific situation.',
          'Below are honest answers to all of that.',
        ],
      },
      {
        heading: 'What Exactly Is a Dental Implant?',
        paragraphs: [
          'A dental implant is a small titanium post — roughly the size of a wood screw — placed directly into the jawbone where a tooth root used to sit. Over three to four months, the bone grows around and fuses to the titanium in a process called osseointegration. Once that fusion is complete, a lifelike porcelain crown attaches to the top of the post.',
          'The result looks, functions, and feels virtually identical to a natural tooth. You brush it normally, floss it normally, eat whatever you want. No adhesives, no removal at night, no special soaks.',
          'Unlike a bridge — which requires grinding down the two adjacent healthy teeth to anchor it — an implant stands alone and doesn\'t affect surrounding teeth. Because it mimics a root, it also stimulates the jawbone and prevents the bone loss that almost always follows tooth loss.',
        ],
      },
      {
        heading: 'Who Is a Candidate?',
        paragraphs: [
          'Most healthy adults missing one or more teeth qualify. The main physical requirement is enough healthy jawbone to support the implant post. Patients who lost teeth years ago often have some bone loss in that area — in many cases a bone graft can restore enough volume to proceed, and we assess this at the initial consultation.',
          'Conditions that significantly impair healing — uncontrolled diabetes, certain autoimmune disorders, active cancer treatment — can complicate success. Heavy smoking raises the risk of implant failure meaningfully and will come up in any honest pre-treatment conversation. Age only matters on the lower end: we wait until the jawbone is fully developed (late teens to early twenties) before placing implants. There is no upper limit.',
        ],
      },
      {
        heading: 'Timeline: What Actually Happens',
        paragraphs: [
          'The full process runs three to six months from placement to final crown. Here is how it unfolds:',
          'Consultation and imaging: Digital X-rays and, in some cases, a 3D cone beam CT scan assess bone density and plan placement precisely. We also review your health history and answer questions before anything is scheduled.',
          'Implant placement: The titanium post is placed into the jawbone under local anesthesia. Most patients are surprised by how manageable this is. There is some soreness for a few days, handled comfortably with over-the-counter pain relief.',
          'Healing phase: Over three to four months, the implant fuses with surrounding bone. You have a temporary restoration during this period — you are never without a tooth.',
          'Crown placement: Once osseointegration is confirmed, your custom porcelain crown is attached, color-matched to surrounding teeth. Most people have no idea you have an implant unless you tell them.',
        ],
      },
      {
        heading: 'What Dental Implants Cost in Kalispell',
        paragraphs: [
          'A single dental implant in Kalispell — post, abutment, and crown — typically runs $3,500 to $5,500 depending on whether bone grafting or other preparatory work is needed.',
          'That is a real investment. Consider the comparison: a dental bridge requires permanently altering healthy adjacent teeth and typically needs replacement every 10 to 15 years. An implant, cared for properly, can last 25 to 30 years — often a lifetime.',
          'Dental insurance rarely covers the full cost of implants, though some plans cover portions of the crown or bone grafting. At Summit Dental we run a full insurance verification before your consultation so you know your exact out-of-pocket cost before committing to anything. We also accept CareCredit, which offers interest-free financing periods.',
        ],
      },
      {
        heading: 'How to Evaluate Any Implant Provider in Kalispell',
        paragraphs: [
          'Not every general dentist places implants. Some refer to oral surgeons for the surgical phase and handle the crown separately. At Summit Dental Group, I complete the entire process — placement through final crown — here in our Kalispell office. The person who knows your bone density, your bite, and your case is the same person placing the post and designing the crown.',
          'When evaluating any implant provider, three questions matter most: How many implants have you personally placed? Do you handle the full process in-house, or do you refer for surgery? Can I see cases similar to mine?',
          'If you\'re in the Flathead Valley and want straight information before making any decision, schedule a consultation. We\'ll review your imaging, go through your options, and give you a complete cost estimate. No pressure, no obligation.',
        ],
      },
    ],
    relatedSlugs: ['emergency-dentist-kalispell', 'teeth-whitening-vs-veneers-kalispell'],
  },

  // ─── 2: Emergency Dentistry ──────────────────────────────────────────────────
  {
    slug: 'emergency-dentist-kalispell',
    title: 'Emergency Dentist in Kalispell, MT: What Counts as a Dental Emergency and What to Do Right Now',
    description: 'What counts as a dental emergency in Kalispell? What should you do before you reach a dentist? Summit Dental Group answers the most urgent questions so you can act quickly.',
    category: 'Emergency Care',
    categorySlug: 'emergency',
    readTime: 5,
    date: '2026-03-14',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Dental emergencies don\'t follow a schedule. Knowing what counts as a true dental emergency — and what to do in the first 30 minutes — can be the difference between saving a tooth and losing one permanently.',
    sections: [
      {
        paragraphs: [
          'The calls I take most seriously are the ones that start with "I don\'t know if this is an emergency." The answer is almost always: if you\'re unsure, call. We\'d rather tell you over the phone that it can wait until tomorrow than have you suffer needlessly — or worse, wait when something genuinely needs same-day care.',
        ],
      },
      {
        heading: 'What Counts as a Dental Emergency',
        paragraphs: [
          'Severe, constant tooth pain — especially throbbing pain, pain that wakes you up, or sensitivity to heat — is almost always a sign of nerve involvement or infection. Both need prompt evaluation. Dental infections spread quickly and do not resolve on their own.',
          'A knocked-out permanent tooth is the most time-sensitive situation in dentistry. You have roughly 30 to 60 minutes to get the tooth reimplanted before the chances of saving it drop sharply. Call us while you are on your way.',
          'A cracked or broken tooth causing pain when biting or sharp temperature sensitivity likely has a fracture reaching the nerve. If the break is jagged and cutting your cheek or tongue, that is urgent.',
          'A dental abscess — swelling in the jaw or cheek, a pimple-like bump on the gum, fever, a persistent bad taste — is a bacterial infection requiring treatment. These do not clear up on their own.',
          'Lost fillings or crowns that expose the underlying tooth and cause significant pain are urgent. Lost restorations without pain can usually wait for the next available appointment.',
        ],
      },
      {
        heading: 'What to Do Before You Reach the Chair',
        paragraphs: [
          'For a knocked-out tooth: Pick it up by the crown — never the root. Rinse it gently with clean water, no scrubbing. Reinsert it gently into the socket if you can and bite softly on gauze to hold it. If reinsertion isn\'t possible, place the tooth in a small container of milk or tuck it between your cheek and gum. Call (406) 752-4545 immediately.',
          'For severe pain: Ibuprofen (if you have no contraindications) is more effective than acetaminophen for dental pain because it reduces inflammation. A cold pack held against the outside of your cheek helps. Do not place aspirin directly on the gum — a common mistake that causes tissue burns.',
          'For a cracked or broken tooth: Rinse gently with warm water. Apply gentle pressure with a clean cloth if there is bleeding. Avoid biting anything hard on that side. Call us.',
          'For swelling: Apply a cold pack to your cheek in 20-minute intervals. Swelling from a dental abscess can escalate quickly — if you develop difficulty swallowing or breathing, go to the emergency room immediately.',
        ],
      },
      {
        heading: 'How We Handle Emergencies at Summit Dental',
        paragraphs: [
          'We make every effort to see emergency patients the same day during office hours, Tuesday through Friday, 8:00 AM to 5:00 PM. Call (406) 752-4545, tell us it\'s an emergency, and we will triage over the phone and get you in as fast as possible.',
          'After hours, leave a message at the same number. We check messages outside of office hours for urgent situations. For anything life-threatening — difficulty breathing, severe uncontrolled bleeding, signs of spreading infection — call 911 or go to Kalispell Regional Medical Center.',
          'If dental anxiety is a factor, mention it when you call. We will make sure your visit includes time to settle, and sedation options are available for follow-up treatment.',
        ],
      },
      {
        heading: 'The Practical Point',
        paragraphs: [
          'Dental problems get more complicated — and more expensive — the longer they go untreated. A two-minute call to describe your symptoms can save you significant pain, time, and money.',
          'Summit Dental Group is at 203 Business Center Loop, Suite C, Kalispell, MT. We serve patients throughout the Flathead Valley.',
        ],
      },
    ],
    relatedSlugs: ['dental-implants-kalispell-mt', 'sedation-dentistry-anxiety-flathead-valley'],
  },

  // ─── 3: Military Dental Guide ────────────────────────────────────────────────
  {
    slug: 'tricare-dental-kalispell-mt',
    title: 'Military Dental Benefits in Montana: What Veterans Should Know Before Choosing a Dentist',
    description: 'A practical guide for veterans and servicemembers in the Flathead Valley navigating military dental coverage, VA dental eligibility, and choosing the right civilian dentist.',
    category: 'Veterans & Military',
    categorySlug: 'veterans',
    readTime: 6,
    date: '2026-03-19',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group \u00b7 USAF Veteran',
    excerpt: 'Navigating military dental coverage as a veteran is genuinely complicated \u2014 active duty programs, VA eligibility rules, and transition to civilian insurance all work differently. Here is a plain-language breakdown so you can make an informed decision.',
    sections: [
      {
        paragraphs: [
          'I\'m a United States Air Force veteran with three combat deployments and I currently serve in the Montana Army National Guard. I navigated military dental coverage from the patient side before I was ever a dentist. The system is not simple, and the misinformation around it is significant.',
          'This guide covers the main programs veterans and servicemembers encounter, how VA dental eligibility actually works, and what to ask any civilian dentist before you book an appointment.',
        ],
      },
      {
        heading: 'Active Duty vs. Veteran Dental Coverage: A Critical Distinction',
        paragraphs: [
          'Active duty service members receive dental care through military treatment facilities (MTFs) at no cost. When an MTF cannot provide the needed care \u2014 due to location, specialty, or workload \u2014 active duty members may be referred to civilian providers through the TRICARE Active Duty Dental Program (ADDP), administered by United Concordia.',
          'Veterans who have separated from service do not automatically retain TRICARE dental coverage. TRICARE ends at separation. The transition to civilian insurance is the responsibility of the separating member, and many veterans are caught off guard by this.',
          'Reserve and National Guard members who are not on active orders occupy a middle ground: they may enroll in the TRICARE Dental Program (TDP) as voluntary enrollees, paying premiums, for coverage when not activated.',
        ],
      },
      {
        heading: 'VA Dental Benefits: Who Qualifies',
        paragraphs: [
          'VA dental care is not available to all veterans \u2014 a common misconception. Eligibility is based on specific criteria, including: service-connected dental disability or conditions resulting from combat injuries, former prisoners of war with any dental condition, veterans receiving a 100% service-connected disability rating, and veterans who were homeless meeting certain conditions.',
          'Veterans who do not meet these criteria are generally not eligible for VA dental services unless enrolled in the VA Dental Insurance Program (VADIP), which is a voluntary insurance plan offered at group rates through Delta Dental and MetLife.',
          'If you believe you qualify for VA dental care, contact the nearest VA facility or visit va.gov/dental-care to verify your eligibility before assuming coverage.',
        ],
      },
      {
        heading: 'Guard and Reserve: What You Have and When',
        paragraphs: [
          'National Guard and Reserve members who are not on active orders may elect TRICARE Dental Program (TDP) coverage through United Concordia. TDP is a voluntary enrollment plan with monthly premiums \u2014 coverage is not automatic.',
          'When Guard or Reserve members are activated to federal orders, their dental coverage changes to the active duty program. Understanding which program applies at any given time matters when scheduling civilian care.',
          'DD Form 2813 \u2014 the dental readiness examination \u2014 is a separate matter. This is a documentation function that some civilian dentists, including Summit Dental Group, can perform for Guard and Reserve members preparing for deployment or annual training requirements.',
        ],
      },
      {
        heading: 'What to Ask a Civilian Dentist Before Booking',
        paragraphs: [
          'Before assuming any civilian practice accepts your specific military dental plan, verify directly. Plans change, network participation changes, and what a practice accepted last year may not apply today.',
          'Three questions to ask when calling any dental office: Which specific military dental plans are you currently enrolled with as a network provider? Can you verify my benefits before my appointment? If my plan requires pre-authorization for certain procedures, do you handle that process with me?',
          'Any competent civilian practice should be able to run a benefits verification before your first visit. If they cannot, or will not, that is worth noting.',
        ],
      },
      {
        heading: 'About Summit Dental Group',
        paragraphs: [
          'Summit Dental Group is a veteran-owned, privately run dental practice in Kalispell, MT. We accept most major civilian dental insurance plans including Delta Dental, Blue Cross/Blue Shield, MetLife, Cigna, and Aetna. We accept CareCredit for flexible financing.',
          'For veterans or servicemembers with specific coverage questions, call us at (406) 752-4545 and we will help clarify what we can verify. We are at 203 Business Center Loop, Suite C, Kalispell, MT 59901.',
        ],
      },
    ],
    relatedSlugs: ['dental-implants-kalispell-mt', 'dental-insurance-benefits-end-of-year-montana'],
  },

  // ─── 4: Sedation Dentistry ───────────────────────────────────────────────────
  {
    slug: 'sedation-dentistry-anxiety-flathead-valley',
    title: 'Dental Anxiety and Sedation Dentistry in the Flathead Valley: You Don\'t Have to White-Knuckle It',
    description: 'Dental anxiety is real and common. Summit Dental Group in Kalispell, MT offers nitrous oxide and oral conscious sedation. Here\'s what nervous patients need to know.',
    category: 'Sedation & Comfort',
    categorySlug: 'sedation',
    readTime: 6,
    date: '2026-03-21',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Somewhere between 30 and 40 million Americans avoid the dentist entirely because of fear. If you\'re one of them — or if you dread every appointment even when you do show up — sedation dentistry is worth understanding. It\'s not just for severe phobias.',
    sections: [
      {
        paragraphs: [
          'Somewhere between 30 and 40 million Americans avoid the dentist entirely because of anxiety or fear. Some have had a bad experience in the past. Some have a sensitive gag reflex that makes procedures unbearable. Some just find the sounds, the smells, and the lack of control deeply uncomfortable. All of it is valid, and none of it is unusual.',
          'At Summit Dental Group, when a patient mentions anxiety when they call, we plan the appointment differently. Slower pace. More check-ins. More explanation before each step. For patients who need more than that, we have two sedation options that genuinely change what the experience is like.',
        ],
      },
      {
        heading: 'The Two Sedation Options We Offer',
        paragraphs: [
          'Nitrous oxide: Administered through a small mask placed over your nose, nitrous takes effect within three to five minutes. It produces a light, calm feeling — you remain fully conscious and can respond to instructions the entire time. The effects clear within minutes of removing the mask, so you can drive yourself home afterward. Nitrous works well for mild to moderate anxiety and for patients who want a light edge taken off without any recovery period.',
          'Oral conscious sedation: You take a prescription sedative pill about an hour before your appointment. By the time you sit down in the chair, you\'re deeply relaxed — conscious and able to respond to your name, but largely unaware of your surroundings. Most patients remember little to nothing of the procedure afterward. You\'ll need a driver to and from the appointment and should not operate machinery for the rest of the day. Oral sedation works well for moderate to severe anxiety, complex or lengthy procedures, or a very sensitive gag reflex.',
        ],
      },
      {
        heading: 'Is Sedation Dentistry Safe?',
        paragraphs: [
          'Both nitrous oxide and oral conscious sedation are well-established options with decades of safe use in dental offices. Neither involves general anesthesia — you are never fully unconscious.',
          'Before recommending either option, I review your complete medical history and current medications. Some medications interact with oral sedatives. Some medical conditions require adjustment to the protocol. That review is a clinical decision, not a formality.',
          'Sedation does not affect the quality of the dental work or require longer appointments. It affects your experience of the appointment, nothing else.',
        ],
      },
      {
        heading: 'Who Uses Sedation Most Often',
        paragraphs: [
          'Sedation dentistry is not reserved for severe phobias. The patients in our practice who use it most often have had a difficult previous dental experience, have a strong gag reflex, need multiple procedures handled efficiently, or struggle to sit still for extended periods.',
          'We also use nitrous routinely for patients undergoing longer procedures — implant placement, multiple extractions, extensive crown work — simply because it makes the appointment more manageable regardless of anxiety level.',
        ],
      },
      {
        heading: 'How to Request Sedation',
        paragraphs: [
          'When you call to schedule, say it plainly: "I\'m anxious about dental appointments and I\'d like to discuss sedation options." That\'s enough. We\'ll adjust your appointment time to accommodate the sedation protocol, answer any advance questions, and send you home with written instructions for your appointment day.',
          'Nobody should have to dread the dentist. Call (406) 752-4545 or request an appointment online. Summit Dental Group is at 203 Business Center Loop, Suite C, Kalispell, MT.',
        ],
      },
    ],
    relatedSlugs: ['emergency-dentist-kalispell', 'dental-implants-kalispell-mt'],
  },

  // ─── 5: Whitening vs. Veneers ────────────────────────────────────────────────
  {
    slug: 'teeth-whitening-vs-veneers-kalispell',
    title: 'Teeth Whitening vs. Veneers in Kalispell, MT: Which One Is Right for You?',
    description: 'Not sure whether you need teeth whitening or veneers? A Kalispell dentist explains the difference, who each is right for, and what to expect from both.',
    category: 'Cosmetic Dentistry',
    categorySlug: 'cosmetic',
    readTime: 5,
    date: '2026-03-24',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Both whitening and veneers can dramatically improve how your smile looks — but they work differently, cost differently, and solve different problems. Here\'s how to figure out which one makes sense for you.',
    sections: [
      {
        paragraphs: [
          'The most common question from patients who want a brighter or more even smile: "Should I do whitening, or do I need veneers?" The answer depends entirely on what you\'re trying to fix. Getting clear on that distinction up front saves time, money, and frustration.',
        ],
      },
      {
        heading: 'What Whitening Does',
        paragraphs: [
          'Professional teeth whitening uses a peroxide-based gel — at a higher concentration than anything sold over the counter — to break up staining compounds inside the enamel. The result is a lighter shade of your natural tooth color, typically four to eight shades brighter in a single in-office session.',
          'Whitening works well for extrinsic staining — the kind caused by coffee, tea, red wine, tobacco, and food pigments. It is safe, effective, and reversible (your teeth will gradually re-stain over time without maintenance).',
          'Whitening does not change the shape, size, or alignment of your teeth. It doesn\'t fix chips, cracks, or gaps. And it only works on natural tooth enamel — existing crowns, veneers, and composite fillings will not lighten.',
          'There is one category of staining whitening cannot address: intrinsic staining. This is discoloration inside the tooth structure caused by certain antibiotics taken in childhood, fluorosis, or tooth trauma. Peroxide cannot reach these stains effectively, regardless of concentration.',
        ],
      },
      {
        heading: 'What Veneers Do',
        paragraphs: [
          'Porcelain veneers are ultra-thin shells — typically 0.3 to 0.5 millimeters thick — permanently bonded to the front surfaces of your teeth. They are custom-fabricated to a specific color, shape, and size that you and your dentist work out together.',
          'Veneers address a wider range of concerns than whitening alone: discoloration that won\'t respond to whitening, chips, cracks, minor gaps, and teeth that don\'t look uniform in length or shape.',
          'The trade-off is permanence. A small amount of enamel — usually less than a millimeter — must be removed from the front of each tooth to accommodate the veneer. Once that enamel is gone, the teeth will always need some form of coverage. Veneers typically run $1,000 to $2,000 per tooth.',
        ],
      },
      {
        heading: 'A Simple Framework for Deciding',
        paragraphs: [
          'Whitening is likely your answer if: your teeth are otherwise healthy and shapely, your main concern is color, the staining is from food or beverages, and you want a more affordable option with minimal commitment.',
          'Veneers are likely your answer if: you have intrinsic staining that hasn\'t responded to whitening, you also want to fix chips, cracks, shape, or size issues, or you want a longer-lasting result and are ready to commit.',
          'Many patients do whitening first, then veneers on any teeth that didn\'t respond adequately or have structural concerns beyond color. Sometimes whitening alone is the complete answer.',
          'My approach at Summit Dental is to start with the least invasive option likely to achieve the result you want. We will not push you toward a more involved treatment when a simpler one will genuinely work.',
        ],
      },
      {
        heading: 'Schedule a Cosmetic Consultation in Kalispell',
        paragraphs: [
          'If you\'re unsure which direction makes sense, a consultation is the right starting point. We\'ll look at your teeth, talk through what you want to change, and give you an honest assessment of which treatment — or combination — gets you there.',
          'Call Summit Dental Group at (406) 752-4545 or request an appointment online. We\'re at 203 Business Center Loop, Suite C, Kalispell, MT 59901.',
        ],
      },
    ],
    relatedSlugs: ['dental-implants-kalispell-mt', 'dental-insurance-benefits-end-of-year-montana'],
  },

  // ─── 6: Dental Insurance Year-End ───────────────────────────────────────────
  {
    slug: 'dental-insurance-benefits-end-of-year-montana',
    title: 'Don\'t Let Your Dental Benefits Expire: A Montana Patient\'s Guide to Using Insurance Before Year-End',
    description: 'Most dental insurance plans reset on January 1. Here\'s how Montana patients can use what\'s left before the deadline — and what to schedule now.',
    category: 'Insurance & Payment',
    categorySlug: 'insurance',
    readTime: 5,
    date: '2026-03-26',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'If you have dental insurance and haven\'t used your full annual benefits yet, you may be leaving hundreds of dollars on the table. Most plans reset on January 1 — here\'s how to make the most of what you\'ve already paid into.',
    sections: [
      {
        paragraphs: [
          'Every year, hundreds of millions of dollars in unused dental benefits vanish because patients don\'t realize they expire. Most plans have an annual maximum — typically $1,000 to $2,000 — that resets on January 1. Benefits not used by December 31 are simply gone. They do not roll over.',
          'If you\'ve been putting off a filling, a crown, or your second cleaning of the year, now is the time to schedule.',
        ],
      },
      {
        heading: 'How Dental Insurance Actually Works',
        paragraphs: [
          'Most employer-sponsored and individual dental plans share the same structure: an annual deductible you pay before coverage activates, a coverage split by service type (preventive at 100%, basic restorative at 80%, major restorative at 50%), and an annual maximum — the most your insurer will pay in a calendar year.',
          'Preventive care — cleanings, X-rays, exams — is covered at 100% by most plans. There is no good financial argument for skipping your twice-yearly cleaning. If you\'re due for your second one before year-end, get it on the calendar.',
          'For patients who met their deductible earlier in the year, the final quarter is the right time to take care of recommended treatment you\'ve been putting off. Deductible is done. Annual maximum still applies. Schedule the filling. Schedule the crown.',
        ],
      },
      {
        heading: 'What Happens When Benefits Reset',
        paragraphs: [
          'When January 1 arrives, your deductible resets. If you\'re planning treatment that spans year-end — a crown requiring two visits, for example — timing the first visit before December 31 and the second after can spread the cost across two benefit years. We can help you plan this kind of sequencing.',
          'Some plans also have waiting periods for certain services that restart with the benefit year. If you\'re on a newer plan, confirm whether you\'re past the waiting period for major work before scheduling.',
        ],
      },
      {
        heading: 'Insurance Plans We Accept in Kalispell',
        paragraphs: [
          'Summit Dental Group accepts most major dental insurance plans — Delta Dental, Blue Cross Blue Shield, MetLife, Cigna, and Aetna. We also work with patients using Medicaid-funded state programs.',
          'If you\'re unsure whether we accept your plan, call (406) 752-4545. We verify benefits for free before your appointment and walk you through exactly what your plan covers and what you\'ll owe. We do this for every new patient.',
        ],
      },
      {
        heading: 'What to Schedule Before Year-End',
        paragraphs: [
          'Second cleaning: schedule it. Recommended filling or crown you\'ve deferred: now is the time, while your deductible is already met. Whitening or a cosmetic consultation: check whether your plan covers any portion of the evaluation.',
          'November and December appointments go fast as patients rush to use expiring benefits. Don\'t wait. Call us at (406) 752-4545 or request an appointment online and we\'ll work to get you in before your benefits reset.',
        ],
      },
    ],
    relatedSlugs: ['tricare-dental-kalispell-mt', 'teeth-whitening-vs-veneers-kalispell'],
  },

  // ─── 7: Fluoride in Kalispell ────────────────────────────────────────────────
  {
    slug: 'fluoride-kalispell-water-dental-health',
    title: 'Fluoride in Kalispell\'s Water Supply: What Patients Ask Us — and What the Research Actually Says',
    description: 'Does Kalispell\'s water supply have enough fluoride to protect your teeth? A local Kalispell dentist explains what patients need to know about fluoride, community water fluoridation, and when supplements make sense.',
    category: 'Preventive Care',
    categorySlug: 'preventive',
    readTime: 5,
    date: '2026-03-28',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Fluoride questions come up in our office regularly — whether Kalispell\'s water is fluoridated, whether supplements help, and whether fluoride is actually safe. Here are straight answers to what we hear most.',
    sections: [
      {
        paragraphs: [
          'Fluoride questions come up consistently in our office, and I\'ve noticed the same few questions repeat across patients. Whether Kalispell\'s municipal water is fluoridated. Whether fluoride is actually necessary. Whether it\'s safe. Since these questions come up so often, it makes sense to answer them clearly in one place.',
        ],
      },
      {
        heading: 'Is Kalispell\'s Water Fluoridated?',
        paragraphs: [
          'Kalispell\'s municipal water supply is fluoridated at levels consistent with the U.S. Public Health Service recommendation of 0.7 milligrams per liter. If you\'re on city water within Kalispell proper, you\'re receiving an optimal level of fluoride through drinking water.',
          'Patients in more rural parts of the Flathead Valley, or those on private well water, may not be receiving fluoride through their water supply at all. Natural fluoride levels in well water vary significantly by location and geology. If your household uses a private well and you have children under six, it\'s worth testing your water and discussing supplementation at your next appointment.',
        ],
      },
      {
        heading: 'What Fluoride Actually Does',
        paragraphs: [
          'Fluoride works in two ways. Systemically — through drinking water and fluoride supplements — it is incorporated into the structure of developing teeth in children, making the enamel harder and more resistant to acid attack. Topically — through fluoride toothpaste, professional fluoride treatments, and fluoridated water in contact with teeth — it remineralizes early-stage decay and strengthens enamel that\'s already formed.',
          'This is why fluoride matters throughout life, not just during childhood. Adults benefit from topical fluoride through toothpaste and professional treatments even after their teeth are fully developed.',
        ],
      },
      {
        heading: 'The Safety Question',
        paragraphs: [
          'Community water fluoridation at the levels used in the United States has been studied continuously since 1945. The current consensus of the CDC, ADA, WHO, and American Academy of Pediatrics supports fluoridation at optimal levels as safe and effective for reducing tooth decay across populations.',
          'The condition associated with excessive fluoride intake is dental fluorosis — white spots or streaks on teeth caused by fluoride overexposure during tooth development in early childhood. Mild fluorosis is cosmetic only and does not affect tooth structure or health. It occurs when children consume far more fluoride than the recommended amount, typically by swallowing large quantities of fluoride toothpaste. Standard use of fluoridated water alone does not cause fluorosis at the levels used in U.S. municipal water systems.',
          'If you have concerns about fluoride for your children, bring them up at your next appointment. These are legitimate clinical conversations, not ones that require a one-size answer.',
        ],
      },
      {
        heading: 'When Fluoride Supplements Make Sense',
        paragraphs: [
          'Supplements — drops or tablets — are recommended for children aged six months to 16 years who live in areas without adequate water fluoridation and who do not have other consistent fluoride sources. The appropriate dose depends on the child\'s age and the fluoride concentration in their water source.',
          'We\'ll look at your specific situation — water source, age of children in the household, current fluoride exposure — and give you a specific recommendation rather than a generic one.',
          'If you have questions about fluoride for your family, call (406) 752-4545 or bring it up at your next cleaning. Summit Dental Group is at 203 Business Center Loop, Suite C, Kalispell, MT.',
        ],
      },
    ],
    relatedSlugs: ['first-dental-visit-children-kalispell', 'dental-insurance-benefits-end-of-year-montana'],
  },

  // ─── 8: Child's First Dental Visit ──────────────────────────────────────────
  {
    slug: 'first-dental-visit-children-kalispell',
    title: 'Your Child\'s First Dental Visit in Kalispell: What Parents Should Know and What to Expect',
    description: 'When should children first see a dentist? What happens at that first appointment? A Kalispell family dentist addresses the questions parents ask most.',
    category: 'Family Dentistry',
    categorySlug: 'family',
    readTime: 5,
    date: '2026-03-30',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'The American Academy of Pediatric Dentistry recommends a child\'s first dental visit by age one. Most parents come in with kids who are three or four — which is still fine, but earlier is better. Here\'s what you need to know and what you\'ll see at that first appointment.',
    sections: [
      {
        paragraphs: [
          'The American Academy of Pediatric Dentistry recommends a child\'s first dental visit by age one — or within six months of the first tooth coming in. Most parents bring their children in at three or four, which is still early enough to establish good patterns, but the earlier you start, the more we can do preventively rather than reactively.',
          'Parents consistently ask the same questions before a child\'s first visit. Here are direct answers to the ones that come up most.',
        ],
      },
      {
        heading: 'What Happens at the First Visit',
        paragraphs: [
          'For very young children — one to two years old — the first visit is mostly an introduction. We look at the teeth and gums, check for signs of early decay, talk through feeding habits and cleaning routines, and answer your questions. The appointment is often done with the child sitting in your lap. The goal is not an exhaustive exam; it\'s getting the child comfortable with the environment and catching anything that warrants attention early.',
          'For children three and older, the first visit typically includes a gentle cleaning, an exam, and X-rays if the child is cooperative and the teeth are close enough together to warrant them. We also discuss bite development, thumb sucking, and other habits that affect how the teeth come in.',
          'The single most important thing you can do before the first visit is talk about it positively. Avoid using words like "hurt," "shot," or "drill." Children who arrive anxious often take their cue from how adults around them have framed the experience.',
        ],
      },
      {
        heading: 'Common Signs Parents Notice That Are Worth Mentioning',
        paragraphs: [
          'White or brown spots on baby teeth, especially near the gumline, can indicate early decay — often called early childhood caries or bottle tooth decay. Treatment at this stage is simple; left alone it can require more involved care quickly.',
          'If your child complains of tooth pain, sensitivity to cold foods, or difficulty chewing on one side, mention it when you call to schedule. We will factor that into the appointment.',
          'Thumb sucking and pacifier use are developmentally normal and typically not a problem until age three to four. If the habit continues beyond then, it can affect how the permanent teeth come in and is worth discussing.',
        ],
      },
      {
        heading: 'Cleaning Baby Teeth at Home',
        paragraphs: [
          'From the first tooth, clean it with a soft, wet cloth or an infant toothbrush. Once multiple teeth are in, use a tiny smear of fluoride toothpaste — about the size of a grain of rice — twice a day. At age three, increase to a pea-sized amount.',
          'Flossing starts when two teeth are in contact with each other. Floss picks designed for children make this considerably easier.',
          'Avoid putting children to bed with a bottle of milk, formula, or juice. Liquid pooling against the teeth overnight is the primary driver of early childhood cavities.',
        ],
      },
      {
        heading: 'How Often Children Should Come In',
        paragraphs: [
          'Every six months, same as adults. Consistent cleanings and exams catch small problems before they become bigger ones, and they establish the routine early enough that dental appointments feel routine rather than exceptional.',
          'To schedule your child\'s first visit at Summit Dental Group in Kalispell, call (406) 752-4545 or request an appointment online. We are at 203 Business Center Loop, Suite C, Kalispell, MT 59901.',
        ],
      },
    ],
    relatedSlugs: ['fluoride-kalispell-water-dental-health', 'dental-insurance-benefits-end-of-year-montana'],
  },

  // ─── 9: Implants vs. Bridges ─────────────────────────────────────────────────
  {
    slug: 'dental-implants-vs-bridges-kalispell',
    title: 'Dental Implants vs. Dental Bridges in Kalispell: Which Makes More Sense for You?',
    description: 'Should you get a dental implant or a bridge to replace a missing tooth in Kalispell, MT? A local dentist compares both options — cost, longevity, candidacy, and when each is the right call.',
    category: 'Dental Implants',
    categorySlug: 'implants',
    readTime: 6,
    date: '2026-04-02',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'If you\'re missing a tooth, you\'ll likely be told about implants and bridges. They solve the same problem in very different ways — and the right choice depends on your jawbone health, your budget, the condition of adjacent teeth, and how long you plan to keep it. Here\'s the comparison.',
    sections: [
      {
        paragraphs: [
          'Replacing a missing tooth is not a single decision — it\'s a comparison between two fundamentally different approaches. Patients who understand both options before their consultation tend to make decisions they\'re more confident in afterward. Here is what separates implants from bridges, and when each makes sense.',
        ],
      },
      {
        heading: 'How Each Option Works',
        paragraphs: [
          'A dental implant replaces the missing tooth root with a titanium post surgically placed into the jawbone. After three to four months of healing, a custom porcelain crown attaches to the post. The implant is entirely independent — it doesn\'t touch adjacent teeth and functions exactly like a natural tooth root.',
          'A dental bridge spans the gap left by the missing tooth by anchoring a false tooth (the pontic) to the two neighboring teeth on either side. Those neighboring teeth — called abutments — are filed down substantially to accept crowns that hold the bridge in place. The result is a fixed replacement that looks natural, but the structure relies on the adjacent teeth for support.',
        ],
      },
      {
        heading: 'The Key Differences',
        paragraphs: [
          'Jawbone health: An implant stimulates the jawbone through chewing force, preventing the bone loss that typically follows tooth loss. A bridge does not — the bone beneath the gap gradually resorbs over time, which can change the shape of the jaw and face over years.',
          'Adjacent teeth: A bridge requires permanently altering two healthy teeth to support it. If those adjacent teeth are already crowned or have significant restorations, this matters less. But permanently modifying healthy teeth to fix a problem that didn\'t originate with them is a real trade-off.',
          'Longevity: Implants, maintained properly, commonly last 25 years or more — often a lifetime. Bridges typically need replacement every 10 to 15 years.',
          'Timeline: A bridge can be completed in two to three appointments over two to three weeks. An implant takes three to six months from placement to final crown due to the healing period.',
          'Cost: A bridge typically runs $2,500 to $3,500 for a three-unit span. An implant runs $3,500 to $5,500. Over time, accounting for bridge replacement, the implant often costs less.',
        ],
      },
      {
        heading: 'When a Bridge Makes More Sense',
        paragraphs: [
          'A bridge is the better answer when there is insufficient jawbone volume to support an implant and bone grafting is not practical or desired. It also makes sense when the patient wants a faster resolution — a bridge can be done in weeks, not months. And when the adjacent teeth already need crowns, a bridge accomplishes two goals simultaneously.',
          'Age is another factor: in older patients whose remaining treatment years are fewer, the lower upfront cost and shorter timeline of a bridge can make more practical sense.',
        ],
      },
      {
        heading: 'When an Implant Makes More Sense',
        paragraphs: [
          'An implant is the right choice for most patients who are healthy candidates — meaning adequate bone, no conditions that significantly impair healing, and non-smokers or controlled smokers. It preserves adjacent teeth, prevents bone loss, and lasts longer.',
          'For younger patients especially, the long-term calculus heavily favors implants. A 35-year-old who gets a bridge may need to replace it two or three times over the course of their life. The same patient with an implant may never need to address that tooth again.',
        ],
      },
      {
        heading: 'Getting the Right Answer for Your Situation',
        paragraphs: [
          'The right choice depends on your specific jawbone volume, the condition of the adjacent teeth, your health history, your budget, and your timeline. There is no blanket answer.',
          'At Summit Dental Group, we give you both options honestly, with clear cost estimates, before you decide anything. Call us at (406) 752-4545 or schedule a consultation online. We are at 203 Business Center Loop, Suite C, Kalispell, MT.',
        ],
      },
    ],
    relatedSlugs: ['dental-implants-kalispell-mt', 'dental-insurance-benefits-end-of-year-montana'],
  },

  // ─── 10: Bad Breath ──────────────────────────────────────────────────────────
  {
    slug: 'bad-breath-causes-treatment-kalispell',
    title: 'Bad Breath: What Actually Causes It and What Actually Fixes It',
    description: 'Persistent bad breath is usually a dental or medical issue — not a hygiene failure. A Kalispell dentist explains the real causes and what treatment actually looks like.',
    category: 'Preventive Care',
    categorySlug: 'preventive',
    readTime: 5,
    date: '2026-04-04',
    author: 'Dr. Mark Vanzant, DMD',
    authorTitle: 'Owner & Lead Dentist, Summit Dental Group',
    excerpt: 'Mouthwash masks bad breath. It doesn\'t fix it. Persistent halitosis almost always has a treatable cause — and the first step is figuring out what it is. Here\'s what we look for and what actually helps.',
    sections: [
      {
        paragraphs: [
          'Mouthwash is designed to mask bad breath, not eliminate its source. If you\'re using it regularly and the problem comes back within a few hours, that\'s the product working as designed — not failing. The underlying cause is still there.',
          'Persistent halitosis almost always has a specific, treatable origin. The first step is identifying which one.',
        ],
      },
      {
        heading: 'The Most Common Causes',
        paragraphs: [
          'Bacteria on the tongue: The tongue\'s surface is covered in tiny papillae — small projections that trap food particles, dead cells, and bacteria. The back third of the tongue is the most common source of bad breath and the area most people miss when brushing. Sulfur compounds produced by these bacteria are the main cause of the familiar unpleasant odor.',
          'Gum disease: Periodontal disease creates pockets between the teeth and gums where bacteria accumulate. These pockets can harbor anaerobic bacteria that produce especially foul-smelling compounds. Bad breath that does not improve with brushing is often a sign of gum disease, and it won\'t resolve until the disease is treated.',
          'Dry mouth: Saliva naturally cleans the mouth, diluting and washing away bacteria and food debris. Reduced saliva flow — from certain medications, medical conditions, or simply sleeping with your mouth open — allows bacteria to accumulate. Many patients notice morning breath is worse than during the day for exactly this reason.',
          'Cavities and failing restorations: Decay and poorly fitting crowns or old fillings can trap food and bacteria in areas that are difficult to clean. Bad breath can be one of the first symptoms.',
          'Dietary causes: Garlic, onion, and certain spices contain volatile sulfur compounds that enter the bloodstream and are exhaled through the lungs. This type of bad breath is temporary and clears once the food is fully metabolized — usually within 24 to 48 hours.',
          'Medical causes: Chronic sinus drainage, acid reflux, kidney dysfunction, and diabetes can all produce distinctive breath odors. If we rule out dental causes and the problem persists, a conversation with your physician makes sense.',
        ],
      },
      {
        heading: 'What Actually Helps',
        paragraphs: [
          'Tongue scraping: A dedicated tongue scraper removes significantly more bacterial buildup from the tongue surface than a toothbrush. Use it at the back of the tongue, not just the front. This alone resolves bad breath for many patients.',
          'Treating gum disease: If periodontal disease is present, a professional deep cleaning — scaling and root planing — removes the bacterial buildup from below the gumline. This is not something toothbrushing can reach. Regular maintenance cleanings afterward prevent it from recurring.',
          'Staying hydrated: Increasing water intake throughout the day supports saliva production and reduces bacterial concentration in the mouth. This is especially relevant for patients taking medications that cause dry mouth.',
          'Consistent brushing and flossing: Brushing twice daily and flossing once removes the food and bacteria that feed odor-producing microbes. Most patients who report brushing regularly still miss the back teeth and the gumline — areas a hygienist can show you during your next visit.',
          'Treating the underlying dental issue: Cavities, old restorations, and improperly fitting crowns that trap bacteria need to be addressed directly. Cleaning around them helps but does not fully resolve the problem.',
        ],
      },
      {
        heading: 'What We Look For at Your Appointment',
        paragraphs: [
          'When a patient comes to our Kalispell office concerned about bad breath, we look for gum disease, cavities, plaque accumulation on the tongue, dry mouth indicators, and signs of systemic causes. We then give you specific feedback on what\'s contributing and a direct treatment recommendation.',
          'Mouthwash is fine as part of a routine. As the sole strategy for persistent bad breath, it isn\'t enough. If this is a recurring problem for you, schedule a cleaning and mention it when you call — it takes an extra minute of conversation and significantly affects how we approach your appointment.',
          'Call (406) 752-4545 or request an appointment online. Summit Dental Group is at 203 Business Center Loop, Suite C, Kalispell, MT 59901.',
        ],
      },
    ],
    relatedSlugs: ['first-dental-visit-children-kalispell', 'sedation-dentistry-anxiety-flathead-valley'],
  },

];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

export function getRelatedArticles(slug: string): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.relatedSlugs
    .map(s => getArticleBySlug(s))
    .filter((a): a is Article => a !== undefined);
}

export const CATEGORIES = [
  { label: 'All Posts', slug: 'all' },
  { label: 'Dental Implants', slug: 'implants' },
  { label: 'Emergency Care', slug: 'emergency' },
  { label: 'Veterans & Military', slug: 'veterans' },
  { label: 'Sedation & Comfort', slug: 'sedation' },
  { label: 'Cosmetic Dentistry', slug: 'cosmetic' },
  { label: 'Insurance & Payment', slug: 'insurance' },
  { label: 'Preventive Care', slug: 'preventive' },
  { label: 'Family Dentistry', slug: 'family' },
];
