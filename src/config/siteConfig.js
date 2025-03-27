export default {
    // 🔥 Configuration Générale du Site
    siteName: "Coaching Performance",
    primaryColor: "#B7D973", // Couleur principale
    secondaryColor: "#000000", // Couleur secondaire
    logo: "/images/logo_m_coaching.webp",
    insta_logo: "/images/insta_logo.webp",
    tiktok_logo: "/images/tiktok_logo.webp",
    fb_logo: "/images/facebook_logo.webp",
    tel: "33683024142",
  
    // 🔥 Section Hero (Accueil)
    heroSection: {
      title: "Votre transformation commence maintenant !",
      description: "Programmes personnalisés, suivi nutritionnel et accompagnement mental : tous les outils pour atteindre vos objectifs.",
      videoUrl: "/videos/home_video.mp4", 
      buttonText: "Je démarre ma transformation",
    },
  
    // 🔥 Offres et Programmes
    offers: [
      {
        title: "Programme 3 mois - Coaching Express",
        benefits: [
          "Séance d’essai offerte",
          "Suivi en ligne et en présentiel",
          "2 séances accompagnées par mois",
          "Programme ajusté tous les mois",
        ],
        price: 75,
        duration: "mois",
        description: "👉 Idéal pour un accompagnement régulier, en présentiel ou à distance !"
      },
      {
        title: "Programme 6 mois - Coaching Hybride",
        benefits: [
          "Séance d’essai offerte avec bilan complet",
          "Suivi en ligne et en présentiel",
          "3 séances accompagnées chaque mois",
          "Programme évolutif ajusté tous les mois",
          "Rééquilibrage alimentaire personnalisé",
          "Accès Whatsapp 7/7 pour aide et conseils",
        ],
        price: 95,
        duration: "mois",
        description: "👉 Parfait pour un suivi long terme avec des ajustements réguliers !",
        featured: true, // Offre mise en avant
      },
      {
        title: "Programme 12 mois - Coaching Premium",
        benefits: [
          "Séance d’essai offerte avec bilan complet",
          "Suivi en ligne et en présentiel illimité",
          "5 séances accompagnées par mois",
          "Programme évolutif ajusté en continu",
          "Rééquilibrage alimentaire avancé",
          "Accès WhatsApp et appels privés 24/7",
        ],
        price: 150,
        duration: "mois",
        description: "👉 Idéal pour progresser en autonomie avec un suivi structuré !"
      },
    ],
  
    // 🔥 Packs de Séances (Alternative aux programmes)
    sessionPacks: [
      {
        title: "Pack 10 séances - Coaching personnalisé",
        benefits: [
          "Coaching 100% en présentiel avec exercices ciblés",
          "Séances à domicile ou en salle",
          "Progression garantie avec un suivi approfondi",
        ],
        price: 450,
        description: "👉 Idéal pour ceux qui veulent des résultats rapides !",
        duration: "pack",
      },
      {
        title: "Pack 20 séances - Coaching personnalisé",
        benefits: [
          "Coaching 100% en présentiel avec exercices ciblés",
          "Séances à domicile ou en salle",
          "Progression garantie avec un suivi approfondi",
        ],
        price: 750,
        description: "👉 Idéal pour un suivi long terme et des progrès constants !",
        duration: "pack",
      },
    ],
  
    // 🔥 Informations de Contact
    contact: {
      whatsapp: "33644389554",
      email: "contact@coaching-performance.com",
      phone: "+33 6 44 38 95 54",
      address: "10 Rue du Coaching, Paris, France",
      socialLinks: {
        tiktok: "https://www.tiktok.com/@le_m1537",
        insta: "https://www.instagram.com/le_mcoach/",
        facebook: "https://www.facebook.com/meendy.pechour",
      },
    },
  
    // 🔥 SEO - Balises Métadonnées
    seo: {
      title: "Coaching Performance - Transforme Ton Corps",
      description: "Atteins tes objectifs grâce à un coaching sportif personnalisé. Programmes adaptés, suivi en ligne et en présentiel.",
      keywords: ["coaching sportif", "fitness", "coaching personnalisé", "programme sportif"],
      image: "/images/logo-2.png", // Image pour OpenGraph (réseaux sociaux)
    },
  };
  