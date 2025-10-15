export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  duration?: string;
  price?: string;
}

export const services: Service[] = [
  {
    id: 'lifestyle-medicine',
    name: 'Lifestyle Medicine',
    category: 'Preventative Care',
    description: 'Comprehensive lifestyle assessment and personalized health optimization programs. Our lifestyle medicine service focuses on sustainable changes to improve your overall health and wellbeing.',
    benefits: [
      'Personalized nutrition and diet planning',
      'Exercise and fitness guidance',
      'Stress management techniques',
      'Sleep optimization strategies',
      'Weight management support',
      'Chronic disease prevention'
    ],
    duration: '60 minutes',
    price: 'From £150'
  },
  {
    id: 'sexual-health-screening',
    name: 'Sexual Health Screening',
    category: 'Screening & Testing',
    description: 'Confidential and comprehensive sexual health screening services with rapid results and professional guidance. We provide a discreet, non-judgmental environment for all your sexual health needs.',
    benefits: [
      'Full STI screening panel',
      'Rapid HIV testing',
      'Hepatitis screening',
      'Confidential consultations',
      'Same-day results available',
      'Treatment and follow-up care'
    ],
    duration: '30 minutes',
    price: 'From £120'
  },
  {
    id: 'medication-review',
    name: 'Medication Review',
    category: 'GP Services',
    description: 'Expert review of your current medications to ensure optimal effectiveness and minimize side effects. Our doctors will assess your medication regimen and make recommendations for improvements.',
    benefits: [
      'Comprehensive medication assessment',
      'Drug interaction review',
      'Side effect management',
      'Dosage optimization',
      'Alternative treatment options',
      'Prescription rationalization'
    ],
    duration: '30 minutes',
    price: 'From £80'
  },
  {
    id: 'minor-surgery',
    name: 'Minor Surgery',
    category: 'Surgical Services',
    description: 'Professional minor surgical procedures performed in our clinic under local anesthetic. Our experienced doctors provide safe and effective treatments for various conditions.',
    benefits: [
      'Skin lesion removal',
      'Cyst excision',
      'Mole removal',
      'Wart treatment',
      'Ingrown toenail surgery',
      'Suturing and wound care'
    ],
    duration: '45 minutes',
    price: 'From £250'
  },
  {
    id: 'joint-injections',
    name: 'Joint Injections',
    category: 'Pain Management',
    description: 'Therapeutic joint injections for pain relief and improved mobility. Our specialists use advanced techniques to provide effective treatment for joint conditions.',
    benefits: [
      'Reduced joint pain',
      'Improved mobility',
      'Decreased inflammation',
      'Non-surgical treatment option',
      'Quick procedure',
      'Minimal downtime'
    ],
    duration: '20 minutes',
    price: 'From £200'
  },
  {
    id: 'botox-bruxism',
    name: 'Botox for Bruxism',
    category: 'Specialist Treatments',
    description: 'Botox treatment for teeth grinding and jaw clenching. This innovative treatment helps reduce muscle tension and associated pain, protecting your teeth and improving quality of life.',
    benefits: [
      'Reduced teeth grinding',
      'Jaw pain relief',
      'Headache reduction',
      'Tooth enamel protection',
      'Improved sleep quality',
      'Long-lasting results'
    ],
    duration: '30 minutes',
    price: 'From £300'
  },
  {
    id: 'rsv-vaccination',
    name: 'RSV Vaccination',
    category: 'Vaccinations',
    description: 'Respiratory Syncytial Virus vaccination for at-risk individuals. Protect yourself and your loved ones from RSV infections with our vaccination service.',
    benefits: [
      'Protection against RSV',
      'Reduced hospitalization risk',
      'Suitable for eligible adults',
      'Professional administration',
      'Post-vaccination monitoring',
      'Vaccination certificate provided'
    ],
    duration: '15 minutes',
    price: 'From £75'
  },
  {
    id: 'blood-testing',
    name: 'Blood Testing',
    category: 'Diagnostic Services',
    description: 'Comprehensive blood testing services with fast results. We offer a wide range of blood tests to assess your health and diagnose various conditions.',
    benefits: [
      'Full blood count',
      'Cholesterol screening',
      'Diabetes testing',
      'Thyroid function tests',
      'Vitamin and mineral levels',
      'Rapid results turnaround'
    ],
    duration: '15 minutes',
    price: 'From £50'
  },
  {
    id: 'heart-health-check',
    name: 'Heart Health Check',
    category: 'Health Screening',
    description: 'Comprehensive cardiovascular assessment to evaluate your heart health and identify risk factors. Our thorough examination helps prevent heart disease and stroke.',
    benefits: [
      'Blood pressure monitoring',
      'Cholesterol testing',
      'ECG examination',
      'Cardiovascular risk assessment',
      'Lifestyle advice',
      'Personalized prevention plan'
    ],
    duration: '45 minutes',
    price: 'From £180'
  },
  {
    id: 'well-woman-check',
    name: 'Well Woman Health Check',
    category: 'Health Screening',
    description: 'Comprehensive health screening designed specifically for women. Our well woman check covers all aspects of female health and wellbeing.',
    benefits: [
      'Breast examination',
      'Cervical screening',
      'Blood pressure check',
      'Blood tests',
      'Bone health assessment',
      'Contraception advice'
    ],
    duration: '60 minutes',
    price: 'From £200'
  },
  {
    id: 'well-man-check',
    name: 'Well Man Health Check',
    category: 'Health Screening',
    description: 'Comprehensive health screening tailored for men. Our well man check addresses male-specific health concerns and general wellbeing.',
    benefits: [
      'Prostate health screening',
      'Testosterone level testing',
      'Cardiovascular assessment',
      'Blood pressure monitoring',
      'Cholesterol testing',
      'Lifestyle advice'
    ],
    duration: '60 minutes',
    price: 'From £200'
  },
  {
    id: 'travel-vaccinations',
    name: 'Private Travel Vaccinations and Yellow Fever Clinic',
    category: 'Travel Health',
    description: 'Comprehensive travel health service including vaccinations and yellow fever certification. Ensure you\'re protected for your international travels.',
    benefits: [
      'Yellow fever vaccination',
      'Malaria prophylaxis',
      'Hepatitis A & B vaccines',
      'Typhoid vaccination',
      'Travel health advice',
      'Official vaccination certificates'
    ],
    duration: '30 minutes',
    price: 'From £60 per vaccine'
  },
  {
    id: 'vaccinations',
    name: 'Vaccinations',
    category: 'Preventative Care',
    description: 'Wide range of vaccination services for adults and children. Stay protected against preventable diseases with our comprehensive vaccination program.',
    benefits: [
      'Flu vaccination',
      'COVID-19 vaccines',
      'Childhood immunizations',
      'HPV vaccination',
      'Shingles vaccine',
      'Pneumonia vaccine'
    ],
    duration: '15 minutes',
    price: 'From £45'
  },
  {
    id: 'contraception',
    name: 'Contraception',
    category: 'Sexual Health',
    description: 'Expert contraception advice and fitting services. Our doctors provide confidential consultations to help you choose the right contraceptive method.',
    benefits: [
      'Contraceptive pill prescriptions',
      'Contraceptive implant fitting',
      'IUD/IUS fitting',
      'Emergency contraception',
      'Contraceptive injection',
      'Personalized advice'
    ],
    duration: '30 minutes',
    price: 'From £100'
  },
  {
    id: 'coil-fitting',
    name: 'Coil Fitting',
    category: 'Sexual Health',
    description: 'Professional IUD and IUS fitting service by experienced doctors. We provide safe and effective long-term contraception options.',
    benefits: [
      'Long-term contraception',
      'Copper IUD fitting',
      'Hormonal IUS fitting',
      'Pre-fitting consultation',
      'Post-fitting check-up',
      'Professional aftercare'
    ],
    duration: '45 minutes',
    price: 'From £280'
  },
  {
    id: 'corporate-healthcare',
    name: 'Corporate Healthcare Services',
    category: 'Corporate',
    description: 'Tailored healthcare solutions for businesses. Help your employees stay healthy and productive with our comprehensive corporate health programs.',
    benefits: [
      'On-site health screenings',
      'Flu vaccination programs',
      'Occupational health services',
      'Health and wellbeing workshops',
      'Executive health assessments',
      'Customizable packages'
    ],
    duration: 'Variable',
    price: 'Custom quote'
  },
  {
    id: 'aesthetic-treatments',
    name: 'Aesthetic Treatments',
    category: 'Aesthetics',
    description: 'Professional aesthetic treatments to help you look and feel your best. Our experienced practitioners offer safe and effective cosmetic procedures.',
    benefits: [
      'Anti-wrinkle injections',
      'Dermal fillers',
      'Skin rejuvenation',
      'Chemical peels',
      'Professional consultation',
      'Natural-looking results'
    ],
    duration: '45 minutes',
    price: 'From £200'
  },
  {
    id: 'menopause-care',
    name: 'Menopause Care',
    category: 'Women\'s Health',
    description: 'Specialized care and support for women going through menopause. Our doctors provide expert guidance and treatment options to manage menopause symptoms.',
    benefits: [
      'Hormone replacement therapy',
      'Symptom management',
      'Bone health assessment',
      'Cardiovascular screening',
      'Mental health support',
      'Lifestyle guidance'
    ],
    duration: '45 minutes',
    price: 'From £150'
  },
  {
    id: 'advanced-health-screening',
    name: 'Advanced Health Screening',
    category: 'Health Screening',
    description: 'Comprehensive health assessment including advanced diagnostics and thorough examination. Our premium screening package provides a complete picture of your health.',
    benefits: [
      'Full body examination',
      'Comprehensive blood tests',
      'ECG and spirometry',
      'Cancer marker screening',
      'Detailed health report',
      'Consultant review'
    ],
    duration: '90 minutes',
    price: 'From £450'
  },
  {
    id: 'cardiovascular-health',
    name: 'Cardiovascular Health',
    category: 'Specialist Care',
    description: 'Specialized cardiovascular assessment and management for heart health. Comprehensive evaluation and treatment of cardiovascular conditions.',
    benefits: [
      'ECG monitoring',
      'Blood pressure management',
      'Cholesterol control',
      'Risk factor assessment',
      'Lifestyle interventions',
      'Medication management'
    ],
    duration: '60 minutes',
    price: 'From £220'
  },
  {
    id: 'childrens-health',
    name: 'Children\'s Health Clinic',
    category: 'Pediatrics',
    description: 'Dedicated healthcare services for children from infancy to adolescence. Our child-friendly clinic provides comprehensive pediatric care.',
    benefits: [
      'Child health assessments',
      'Vaccination programs',
      'Developmental checks',
      'Illness consultations',
      'Growth monitoring',
      'Parent guidance'
    ],
    duration: '30 minutes',
    price: 'From £100'
  },
  {
    id: 'geriatric-treatment',
    name: 'Geriatric Treatment',
    category: 'Elderly Care',
    description: 'Specialized healthcare for older adults focusing on age-related conditions and maintaining quality of life. Our geriatric service addresses the unique needs of senior patients.',
    benefits: [
      'Comprehensive health assessment',
      'Medication management',
      'Mobility support',
      'Fall prevention',
      'Cognitive health monitoring',
      'Chronic disease management'
    ],
    duration: '60 minutes',
    price: 'From £180'
  },
  {
    id: 'hay-fever-treatment',
    name: 'Hay Fever Treatment',
    category: 'Allergy Services',
    description: 'Effective treatments and management strategies for hay fever and seasonal allergies. Get relief from your allergy symptoms with our expert care.',
    benefits: [
      'Allergy testing',
      'Prescription antihistamines',
      'Nasal sprays',
      'Immunotherapy options',
      'Lifestyle advice',
      'Seasonal management plans'
    ],
    duration: '20 minutes',
    price: 'From £90'
  },
  {
    id: 'lifestyle-medicine-private',
    name: 'Private Lifestyle Medicine',
    category: 'Wellness',
    description: 'Premium lifestyle medicine service with personalized health optimization. Work one-on-one with our specialists to achieve your health goals.',
    benefits: [
      'Comprehensive health assessment',
      'Personalized wellness plan',
      'Nutritional counseling',
      'Fitness program design',
      'Stress management coaching',
      'Ongoing support and monitoring'
    ],
    duration: '90 minutes',
    price: 'From £300'
  },
  {
    id: 'mens-health-clinic',
    name: 'Men\'s Health Clinic',
    category: 'Men\'s Health',
    description: 'Specialized healthcare addressing men\'s specific health concerns in a confidential environment. Our male health experts provide comprehensive care.',
    benefits: [
      'Erectile dysfunction treatment',
      'Testosterone management',
      'Prostate health',
      'Male fertility assessment',
      'Hair loss treatment',
      'Mental health support'
    ],
    duration: '45 minutes',
    price: 'From £150'
  },
  {
    id: 'mental-health-clinic',
    name: 'Mental Health Clinic',
    category: 'Mental Health',
    description: 'Professional mental health support and treatment services. Our experienced practitioners provide compassionate care for various mental health conditions.',
    benefits: [
      'Depression and anxiety treatment',
      'Stress management',
      'Counseling services',
      'Psychiatric assessment',
      'Medication management',
      'Therapy referrals'
    ],
    duration: '60 minutes',
    price: 'From £180'
  },
  {
    id: 'preventative-healthcare',
    name: 'Preventative Healthcare',
    category: 'Prevention',
    description: 'Proactive healthcare focused on disease prevention and health maintenance. Stay ahead of health issues with regular monitoring and early intervention.',
    benefits: [
      'Regular health screenings',
      'Risk factor identification',
      'Preventive treatments',
      'Health education',
      'Lifestyle modification support',
      'Early disease detection'
    ],
    duration: '45 minutes',
    price: 'From £140'
  },
  {
    id: 'womens-health-clinic',
    name: 'Women\'s Health Clinic',
    category: 'Women\'s Health',
    description: 'Comprehensive healthcare services addressing all aspects of women\'s health. Our female health specialists provide expert care in a comfortable environment.',
    benefits: [
      'Gynecological examinations',
      'Contraception services',
      'Menstrual disorder management',
      'Pregnancy planning advice',
      'Menopause support',
      'Breast health screening'
    ],
    duration: '45 minutes',
    price: 'From £150'
  }
];

export const categories = [
  'All Services',
  'GP Services',
  'Health Screening',
  'Specialist Care',
  'Sexual Health',
  'Vaccinations',
  'Wellness',
  'Mental Health'
];
