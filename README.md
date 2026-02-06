# Portfolio Développeur & Infographe

## 📋 Description
Portfolio professionnel présentant vos compétences en développement web, applications mobiles/desktop, design graphique, montage vidéo et infrastructure IT.

## 📁 Structure des fichiers
- `index.html` - Structure HTML du portfolio
- `styles.css` - Tous les styles CSS (séparés du HTML)
- `script.js` - Animations et interactions JavaScript

## ✏️ Comment personnaliser

### 1. Informations personnelles (dans index.html)

#### Modifier votre email et téléphone :
Ligne 236-250, remplacez :
```html
<p>votre.email@exemple.com</p>
<p>+221 XX XXX XX XX</p>
```

#### Modifier le titre de la page :
Ligne 6, changez :
```html
<title>Portfolio - Développeur & Infographe</title>
```

### 2. Couleurs et design (dans styles.css)

#### Changer les couleurs principales :
Lignes 2-10, modifiez les variables :
```css
--color-primary: #0F172A;        /* Couleur principale (bleu foncé) */
--color-secondary: #F59E0B;      /* Couleur secondaire (orange) */
--color-accent: #3B82F6;         /* Couleur d'accent (bleu) */
```

#### Exemples de palettes alternatives :

**Palette 1 - Vert & Noir :**
```css
--color-primary: #1A1A1A;
--color-secondary: #10B981;
--color-accent: #34D399;
```

**Palette 2 - Violet & Rose :**
```css
--color-primary: #1E1B4B;
--color-secondary: #A855F7;
--color-accent: #EC4899;
```

**Palette 3 - Bleu ciel :**
```css
--color-primary: #0C4A6E;
--color-secondary: #0EA5E9;
--color-accent: #38BDF8;
```

### 3. Polices de caractères (dans styles.css)

Lignes 12-13, vous pouvez changer :
```css
--font-display: 'Playfair Display', serif;  /* Titre */
--font-body: 'DM Sans', sans-serif;          /* Texte */
```

Pour utiliser d'autres polices Google Fonts, modifiez aussi la ligne 8 du fichier HTML.

### 4. Ajouter vos projets

Dans la section Services, vous pouvez ajouter des liens vers vos projets :

```html
<div class="service-card">
    <div class="service-number">01</div>
    <h3 class="service-title">Nom du Projet</h3>
    <p class="service-description">Description du projet...</p>
    <div class="service-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
    <a href="lien-vers-projet" class="btn btn-primary">Voir le projet</a>
</div>
```

### 5. Ajouter des images

Pour ajouter votre photo dans le hero :
```html
<div class="hero-visual">
    <img src="votre-photo.jpg" alt="Photo profil" style="border-radius: 20px; width: 100%; max-width: 500px;">
</div>
```

### 6. Modifier les animations

Dans `script.js`, vous pouvez ajuster la vitesse des animations :
- Ligne 12 : `threshold: 0.1` (sensibilité de déclenchement)
- Ligne 24 : `transition: 'opacity 0.6s ease'` (durée des transitions)

## 🚀 Déploiement

### Option 1 - Hébergement gratuit :
1. **GitHub Pages** : Créez un repo, uploadez les fichiers, activez GitHub Pages
2. **Netlify** : Glissez-déposez votre dossier sur netlify.com
3. **Vercel** : Importez votre projet depuis GitHub

### Option 2 - Hébergement local :
1. Ouvrez simplement `index.html` dans votre navigateur
2. Ou utilisez Live Server si vous avez VS Code

## 🎨 Personnalisations avancées

### Ajouter une section Portfolio avec galerie :
```html
<section id="portfolio" class="portfolio">
    <div class="container">
        <h2 class="section-title">
            <span class="title-number">04</span>
            Mes Réalisations
        </h2>
        <div class="portfolio-grid">
            <!-- Ajoutez vos projets ici -->
        </div>
    </div>
</section>
```

### Ajouter des icônes de réseaux sociaux :
Dans le footer, ajoutez :
```html
<div class="social-links">
    <a href="lien-linkedin">LinkedIn</a>
    <a href="lien-github">GitHub</a>
    <a href="lien-behance">Behance</a>
</div>
```

## 📱 Responsive
Le portfolio est entièrement responsive et s'adapte automatiquement aux :
- 📱 Smartphones (< 480px)
- 📱 Tablettes (< 768px)
- 💻 Ordinateurs (> 768px)

## 🛠️ Technologies utilisées
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla JS)
- Google Fonts (Playfair Display, DM Sans)

## 📝 Notes importantes
1. **Formulaire de contact** : Le formulaire actuel est en front-end uniquement. Pour un vrai envoi d'emails, vous devrez :
   - Utiliser un service comme Formspree, EmailJS ou Netlify Forms
   - Ou créer un backend avec Node.js/PHP

2. **SEO** : Pensez à ajouter des meta tags dans `<head>` :
```html
<meta name="description" content="Portfolio de [Votre Nom] - Développeur et Infographe">
<meta name="keywords" content="développeur, web, mobile, infographie, sénégal">
```

3. **Performance** : Les images doivent être optimisées (< 200KB idéalement)

## 🎯 Prochaines étapes suggérées
- [ ] Ajouter vos vraies coordonnées
- [ ] Choisir votre palette de couleurs
- [ ] Ajouter vos projets réels
- [ ] Intégrer une galerie d'images
- [ ] Configurer le formulaire de contact
- [ ] Ajouter des témoignages clients
- [ ] Créer une section blog (optionnel)

## 📞 Support
Si vous avez des questions sur la personnalisation, n'hésitez pas à consulter :
- Documentation HTML : https://developer.mozilla.org/fr/docs/Web/HTML
- Documentation CSS : https://developer.mozilla.org/fr/docs/Web/CSS

---

**Bon courage avec votre portfolio ! 🚀**
