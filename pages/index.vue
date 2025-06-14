<template>
  <div class="min-h-screen  flex items-start justify-center py-6 px-4">
    <div class="rounded-xl max-w-6xl container">
      <div class="flex flex-col lg:flex-row gap-5">
        <aside class="lg:basis-1/4 rounded-lg">
          <PersonalInformation />
        </aside>
        <main class="lg:basis-3/4 space-y-6">
          <WorkExperience />
          <Skills />
          <Projects />
          <Education />
          <Awards />
          <Employers />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  // Basic SEO
  title: 'Parag Diwan | Frontend Engineer | React & Nuxt Expert',
  description: 'Experienced frontend developer specializing in React, Vue, Nuxt, and modern web performance. Explore my portfolio, blog, and open-source work.',
  keywords: 'Frontend Developer, React, Nuxt, Vue, JavaScript, Web Performance, GitHub Pages, Parag Diwan',

  // Open Graph (Facebook, LinkedIn, etc.)
  ogTitle: 'Parag Diwan | Frontend Engineer Portfolio',
  ogDescription: 'Explore my work in React, Vue, and Nuxt. High-performance frontend solutions and modern UI design.',
  ogImage: 'https://paragdiwan.github.io/og-image.png',
  ogUrl: 'https://paragdiwan.github.io',
  ogType: 'website',

  // Twitter Cards
  twitterCard: 'summary_large_image',
  twitterTitle: 'Parag Diwan | Frontend Engineer',
  twitterDescription: 'Building performant web interfaces using React, Nuxt, and Tailwind.',
  twitterImage: 'https://paragdiwan.github.io/og-image.png', // same as ogImage or separate

  // Robots & Canonical
  robots: 'index, follow',
  canonical: 'https://paragdiwan.github.io',

  // Application
  author: 'Parag Diwan',
  themeColor: '#0f172a',
  viewport: 'width=device-width, initial-scale=1.0'
})
useHead({
  meta: [
    { name: 'google-site-verification', content: '_tK9WDi0vwQQTd56sB2I09dXbgrpcfPOcOk2OyT2q-Y' }
  ],
  link: [
    { rel: 'canonical', href: 'https://paragdiwan.github.io/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Parag Diwan",
        url: "https://paragdiwan.github.io",
        sameAs: [
          "https://www.linkedin.com/in/paragdiwan",
          "https://github.com/paragdiwan"
        ]
      })
    },
    {
      tagPosition: 'head',
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=GTM-T9XFGGGD'+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T9XFGGGD');`,
      type: 'text/javascript'
    }
  ]
})
</script>
