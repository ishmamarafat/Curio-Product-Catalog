import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section.catalog-section');
    if (!sections.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove('active'));
          const target = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
          if (target) target.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>CURIO {'রহস্য'} — Product Catalog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      </Head>
      <main>
        

{/* ====================== COVER ====================== */}
<div className="cover">
  <div className="cover-texture"></div>
  <div className="cover-inner">
    <div className="cover-pre">Launch Edition · 2026</div>
    <div className="cover-ornament-row">
      <div className="cover-ornament-line"></div>
      <div className="cover-ornament-diamond"></div>
      <div className="cover-ornament-line"></div>
    </div>
    <div className="cover-logo">CURIO</div>
    <div className="cover-bangla">{'রহস্য'}</div>
    <div className="cover-ornament-row cover-ornament-row-b">
      <div className="cover-ornament-line"></div>
      <div className="cover-ornament-diamond"></div>
      <div className="cover-ornament-line"></div>
    </div>
    <div className="cover-subtitle">Product Catalog &nbsp;·&nbsp; Curated Mystery · Dhaka</div>
    <div className="cover-categories">
      <span className="cover-cat-item">Mystery</span>
      <span className="cover-cat-item">Jewelry</span>
      <span className="cover-cat-item">Hair &amp; Bindis</span>
      <span className="cover-cat-item">Character</span>
      <span className="cover-cat-item">Stationery</span>
    </div>
  </div>
  <div className="cover-scroll">
    <div className="cover-scroll-text">Explore</div>
    <div className="cover-scroll-line"></div>
  </div>
</div>

{/* ====================== NAV ====================== */}
<nav className="catalog-nav" id="main-nav">
  <div className="nav-brand">CURIO <span className="nav-brand-bangla">{'রহস্য'}</span></div>
  <div className="nav-links">
    <a className="nav-link" href="#mystery">Mystery <span className="nav-count">2</span></a>
    <a className="nav-link" href="#jewelry">Jewelry <span className="nav-count">12</span></a>
    <a className="nav-link" href="#hair-bindis">Hair &amp; Bindis <span className="nav-count">4</span></a>
    <a className="nav-link" href="#character">Character <span className="nav-count">8</span></a>
    <a className="nav-link" href="#stationery">Stationery <span className="nav-count">12</span></a>
  </div>
</nav>

{/* ====================== MYSTERY ====================== */}
<section className="catalog-section" id="mystery">
  <div className="section-header">
    <div className="section-header-top">
      <div className="section-rule"></div>
      <div className="section-title-wrap">
        <div className="section-eyebrow">Start Here</div>
        <div className="section-title">Mystery</div>
      </div>
      <div className="section-rule"></div>
    </div>
    <div className="section-meta">
      <span className="section-meta-dot"></span>
      2 ways in &nbsp;·&nbsp; The Scoop, The Package
    </div>
  </div>

  <div className="product-grid">

    {/* The Scoop */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/scoop.jpg" alt="The Scoop" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Mystery · Scoops</div>
        <div className="product-name">The Scoop</div>
        <div className="product-tagline">"Live, unscripted, all yours."</div>
        <div className="product-desc">We film ourselves scooping items live — you watch, we pack. The mystery unfolds in real time.</div>
        <div className="tier-list">
          <div className="tier-row">
            <div className="tier-info">
              <div className="tier-name">Small Scoop</div>
              <div className="tier-items">5–6 items</div>
            </div>
            <div className="tier-price">
              <div className="tier-launch">
                <span className="price-currency">{'৳'}</span>
                <span className="tier-launch-amt">499</span>
              </div>
              <div className="tier-regular-row">
                <span className="tier-regular">{'৳'}715</span>
                <span className="price-off-badge">30% OFF</span>
              </div>
            </div>
          </div>
          <div className="tier-row">
            <div className="tier-info">
              <div className="tier-name">Classic Scoop</div>
              <div className="tier-items">9–11 items</div>
            </div>
            <div className="tier-price">
              <div className="tier-launch">
                <span className="price-currency">{'৳'}</span>
                <span className="tier-launch-amt">799</span>
              </div>
              <div className="tier-regular-row">
                <span className="tier-regular">{'৳'}1140</span>
                <span className="price-off-badge">30% OFF</span>
              </div>
            </div>
          </div>
          <div className="tier-row">
            <div className="tier-info">
              <div className="tier-name">Mega Scoop</div>
              <div className="tier-items">15–18 items</div>
            </div>
            <div className="tier-price">
              <div className="tier-launch">
                <span className="price-currency">{'৳'}</span>
                <span className="tier-launch-amt">1199</span>
              </div>
              <div className="tier-regular-row">
                <span className="tier-regular">{'৳'}1715</span>
                <span className="price-off-badge">30% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* The Package */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/package.jpg" alt="The Package" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Mystery · Packages</div>
        <div className="product-name">The Package</div>
        <div className="product-tagline">"Curated by us. Surprising for you."</div>
        <div className="product-desc">We curate and pack the box our way — sealed with taste, delivered with surprise.</div>
        <div className="tier-list">
          <div className="tier-row">
            <div className="tier-info">
              <div className="tier-name">Small Package</div>
              <div className="tier-items">5–6 items</div>
            </div>
            <div className="tier-price">
              <div className="tier-launch">
                <span className="price-currency">{'৳'}</span>
                <span className="tier-launch-amt">499</span>
              </div>
              <div className="tier-regular-row">
                <span className="tier-regular">{'৳'}715</span>
                <span className="price-off-badge">30% OFF</span>
              </div>
            </div>
          </div>
          <div className="tier-row">
            <div className="tier-info">
              <div className="tier-name">Classic Package</div>
              <div className="tier-items">9–11 items</div>
            </div>
            <div className="tier-price">
              <div className="tier-launch">
                <span className="price-currency">{'৳'}</span>
                <span className="tier-launch-amt">799</span>
              </div>
              <div className="tier-regular-row">
                <span className="tier-regular">{'৳'}1140</span>
                <span className="price-off-badge">30% OFF</span>
              </div>
            </div>
          </div>
          <div className="tier-row">
            <div className="tier-info">
              <div className="tier-name">Mega Package</div>
              <div className="tier-items">15–18 items</div>
            </div>
            <div className="tier-price">
              <div className="tier-launch">
                <span className="price-currency">{'৳'}</span>
                <span className="tier-launch-amt">1199</span>
              </div>
              <div className="tier-regular-row">
                <span className="tier-regular">{'৳'}1715</span>
                <span className="price-off-badge">30% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>{/* /product-grid */}
</section>

{/* ====================== JEWELRY ====================== */}
<section className="catalog-section" id="jewelry">
  <div className="section-header">
    <div className="section-header-top">
      <div className="section-rule"></div>
      <div className="section-title-wrap">
        <div className="section-eyebrow">Category One</div>
        <div className="section-title">Jewelry</div>
      </div>
      <div className="section-rule"></div>
    </div>
    <div className="section-meta">
      <span className="section-meta-dot"></span>
      12 products &nbsp;·&nbsp; Rings, Earrings, Bracelets, Pendants
    </div>
  </div>

  <div className="product-grid">

    {/* Chunky Rings — 2 types */}
    <div className="product-card">
      <div className="img-multi">
        <div className="variant-pill">2 types</div>
        <div className="img-multi-grid g2">
          <div className="img-slot"><Image src="/chunky-ring-type-1.jpg" alt="Chunky Rings variant 1" fill className="object-cover" /><div className="img-slot-num">01</div><div className="img-slot-sub">Variant</div></div>
          <div className="img-slot"><Image src="/chunky-ring-type-2.jpg" alt="Chunky Rings variant 2" fill className="object-cover" /><div className="img-slot-num">02</div><div className="img-slot-sub">Variant</div></div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Rings</div>
        <div className="product-name">Chunky Rings</div>
        <div className="product-tagline">"Stack 'em. Own the aesthetic."</div>
        <div className="product-desc">Bold, oversized, unapologetically Y2K — these chunky rings are meant to be worn three at a time. Mix metals, mix moods. One ring for every version of you.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">149</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}213</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Enamel Rings — 3 types */}
    <div className="product-card">
      <div className="img-multi">
        <div className="variant-pill">3 types</div>
        <div className="img-multi-grid g3">
          <div className="img-slot"><Image src="/enamel-ring-type-1.jpg" alt="Enamel Rings variant 1" fill className="object-cover" /><div className="img-slot-num">01</div><div className="img-slot-sub">Variant</div></div>
          <div className="img-slot"><Image src="/enamel-ring-type-2.jpg" alt="Enamel Rings variant 2" fill className="object-cover" /><div className="img-slot-num">02</div><div className="img-slot-sub">Variant</div></div>
          <div className="img-slot"><Image src="/enamel-ring-type-3.jpg" alt="Enamel Rings variant 3" fill className="object-cover" /><div className="img-slot-num">03</div><div className="img-slot-sub">Variant</div></div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Rings</div>
        <div className="product-name">Enamel Rings</div>
        <div className="product-tagline">"Tiny art. Worn on your finger."</div>
        <div className="product-desc">Colourful enamel detailing on a dainty band. Cute enough for school, cool enough for wherever the night takes you. Collect one in every shade.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">169</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}241</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bracelet 4pc */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/bracelet-4-pc-set.jpg" alt="Bracelet 4pc Packet" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Bracelets</div>
        <div className="product-name">Bracelet (4pc Packet)</div>
        <div className="product-tagline">"Four bracelets. One wrist. Infinite combinations."</div>
        <div className="product-desc">A curated set of four stackable bracelets — because one is never enough. Layer them together or mix with your own favourites. The perfect wrist stack starts here.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">299</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}427</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Water Droplet Earrings */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/water-droplets-earrings.jpg" alt="Water Droplet Earrings" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Water Droplet Earrings</div>
        <div className="product-tagline">"Light. Airy. Effortlessly you."</div>
        <div className="product-desc">Delicate water droplet silhouettes that catch the light with every turn of your head. The kind of earrings you forget you're wearing — until someone asks about them.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">149</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}213</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Pearl Stud Earrings */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/pearl-stud-earrings.jpg" alt="Pearl Stud Earrings" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Pearl Stud Earrings</div>
        <div className="product-tagline">"Old money energy. New girl attitude."</div>
        <div className="product-desc">Classic pearl studs reimagined for Gen Z. Minimal, timeless, and just the right amount of put-together. Works with your school uniform and your going-out fit.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">199</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}284</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Cherry Earrings */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/cherry-earrings.jpg" alt="Cherry Earrings" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Cherry Earrings</div>
        <div className="product-tagline">"Sweet. Playful. Totally iconic."</div>
        <div className="product-desc">Cherry dangles that scream summer Y2K. These tiny statement earrings are the punctuation mark your outfit was missing. Playful without trying — that's the vibe.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">149</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}213</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Pearl Earrings */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/pearl-earrings.jpg" alt="Pearl Earrings" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Pearl Earrings</div>
        <div className="product-tagline">"Pearls, but make it interesting."</div>
        <div className="product-desc">Not your grandmother's pearls. These have character — whether they dangle, cluster, or drop, they bring a quiet confidence that does all the talking for you.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">249</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}356</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Helix Earrings */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/helix-earrings.jpg" alt="Helix Earrings" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Helix Earrings</div>
        <div className="product-tagline">"Designed for the girl who collects earrings."</div>
        <div className="product-desc">Slim, spiral, subtly stunning. Made for stacking up the ear or wearing solo for a clean, editorial look. Minimal effort. Maximum cool.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">199</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}284</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Moyur Earrings */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/moyur-earrings.jpg" alt="Moyur Earrings" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Moyur Earrings</div>
        <div className="product-tagline">"Inspired by the peacock. Worn by you."</div>
        <div className="product-desc">Taking the shimmering beauty of the moyur and distilling it into wearable art. Intricate details, iridescent charm — at every celebration and every casual Tuesday.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">249</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}356</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Jhumka */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/jhumka.jpg" alt="Jhumka" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Jhumka</div>
        <div className="product-tagline">"Your deshi roots. Your Y2K moment."</div>
        <div className="product-desc">Bangladesh's most beloved earring gets a CURIO refresh. Traditional bell shape, contemporary finish. Wear it to Eid, to a hangout, to wherever you want to feel rooted and radiant.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">219</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}313</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Mini Jhumka */}
    <div className="product-card">
      <div className="img-multi">
        <div className="variant-pill">3 types</div>
        <div className="img-multi-grid g3">
          <div className="img-slot"><Image src="/mini-jhumka-type-1.jpg" alt="Mini Jhumka type 1" fill className="object-cover" /><div className="img-slot-num">01</div><div className="img-slot-sub">Variant</div></div>
          <div className="img-slot"><Image src="/mini-jhumka-type-2.jpg" alt="Mini Jhumka type 2" fill className="object-cover" /><div className="img-slot-num">02</div><div className="img-slot-sub">Variant</div></div>
          <div className="img-slot"><Image src="/mini-jhumka-type-3.jpg" alt="Mini Jhumka type 3" fill className="object-cover" /><div className="img-slot-num">03</div><div className="img-slot-sub">Variant</div></div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Earrings</div>
        <div className="product-name">Mini Jhumka</div>
        <div className="product-tagline">"All the culture. Half the size."</div>
        <div className="product-desc">A petite version of the beloved jhumka — small enough for everyday wear, significant enough to carry a heritage. That gentle, familiar jingle, always with you.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">129</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}184</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Pendants — 2 types */}
    <div className="product-card">
      <div className="img-multi">
        <div className="variant-pill">2 types</div>
        <div className="img-multi-grid g2">
          <div className="img-slot"><Image src="/pendant-type-1.jpg" alt="Pendant type 1" fill className="object-cover" /><div className="img-slot-num">01</div><div className="img-slot-sub">Variant</div></div>
          <div className="img-slot"><Image src="/pendant-type-2.jpg" alt="Pendant type 2" fill className="object-cover" /><div className="img-slot-num">02</div><div className="img-slot-sub">Variant</div></div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Jewelry · Pendants</div>
        <div className="product-name">Pendants</div>
        <div className="product-tagline">"A little mystery. Right at your heart."</div>
        <div className="product-desc">Delicate pendant designs that sit close to the heart — literally. Each piece carries its own quiet story. Wear alone or layer with other necklaces for a curated, lived-in look.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">179</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}256</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

  </div>{/* /product-grid */}
</section>

{/* ====================== HAIR & BINDIS ====================== */}
<section className="catalog-section tinted" id="hair-bindis">
  <div className="section-header">
    <div className="section-header-top">
      <div className="section-rule"></div>
      <div className="section-title-wrap">
        <div className="section-eyebrow">Category Two</div>
        <div className="section-title">Hair &amp; Bindis</div>
      </div>
      <div className="section-rule"></div>
    </div>
    <div className="section-meta">
      <span className="section-meta-dot"></span>
      4 products &nbsp;·&nbsp; Bindis, Clips
    </div>
  </div>

  <div className="product-grid">

    {/* Chaad Tip */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/chand-tip.jpg" alt="Chaad Tip (Sheet)" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Hair &amp; Bindis</div>
        <div className="product-name">Chaad Tip (Sheet)</div>
        <div className="product-tagline">"Wear the moon on your forehead."</div>
        <div className="product-desc">A full sheet of crescent moon-shaped tips — the classic chaad tip, beloved for generations. For Eid, for a photoshoot, or just because you felt like it today.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">49</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}70</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Stone Tip */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/stone-tip.jpg" alt="Stone Tip (Sheet)" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Hair &amp; Bindis</div>
        <div className="product-name">Stone Tip (Sheet)</div>
        <div className="product-tagline">"A sparkle. Right between your brows."</div>
        <div className="product-desc">A whole sheet of gem-studded tips in assorted shapes and colours. One sheet. Endless looks. The finishing touch your beauty routine didn't know it needed.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">49</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}70</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Claw Clips */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/claw-clips.jpg" alt="Claw Clips" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Hair &amp; Bindis</div>
        <div className="product-name">Claw Clips</div>
        <div className="product-tagline">"Hair up. Confidence on."</div>
        <div className="product-desc">The claw clip is back — and it never really left. A reliable, stylish grip for every kind of hair. Messy bun, half-up, full twist — this little clip does the heavy lifting.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">99</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}141</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Clips */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/clips.jpg" alt="Clips" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Hair &amp; Bindis</div>
        <div className="product-name">Clips</div>
        <div className="product-tagline">"Small clips. Big statement."</div>
        <div className="product-desc">Decorative hair clips that add that extra something to any style. Scatter a few across a low bun or line them up the side for that effortlessly curated hair moment.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">79</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}113</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

  </div>{/* /product-grid */}
</section>

{/* ====================== CHARACTER ====================== */}
<section className="catalog-section" id="character">
  <div className="section-header">
    <div className="section-header-top">
      <div className="section-rule"></div>
      <div className="section-title-wrap">
        <div className="section-eyebrow">Category Three</div>
        <div className="section-title">Character</div>
      </div>
      <div className="section-rule"></div>
    </div>
    <div className="section-meta">
      <span className="section-meta-dot"></span>
      8 products &nbsp;·&nbsp; Key Rings, Charms, Bags
    </div>
  </div>

  <div className="product-grid">

    {/* Kuromi Key Ring */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/key-ring-kuromi-png.jpg" alt="Kuromi Key Ring" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Key Rings</div>
        <div className="product-name">Kuromi Key Ring</div>
        <div className="product-tagline">"Dark, cute, and kind of iconic."</div>
        <div className="product-desc">Kuromi — Sanrio's rebellious bad girl — now dangling from your bag or keys. A little edgy, a lot adorable. For the girl who knows the rule-breaker is always the best character.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">199</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}284</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Tumbler Key Ring */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/key-ring-tumbler.jpg" alt="Tumbler Key Ring" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Key Rings</div>
        <div className="product-name">Tumbler Key Ring</div>
        <div className="product-tagline">"For the girl who never puts down her cup."</div>
        <div className="product-desc">A miniature tumbler charm — because your obsession with aesthetic drinkware deserves to come with you everywhere. Clip it on, show it off.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">199</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}284</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Pink Bow Key Ring */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/key-ring-pink-bow.jpg" alt="Pink Bow Key Ring" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Key Rings</div>
        <div className="product-name">Pink Bow Key Ring</div>
        <div className="product-tagline">"Coquette energy. Always."</div>
        <div className="product-desc">A soft, pink satin bow — the unofficial symbol of the coquette aesthetic — now in key ring form. Feminine, playful, and a little flirty. Add to your bag and let the vibes speak.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">99</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}141</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Car Key Ring */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/key-ring-cars.jpg" alt="Car Key Ring" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Key Rings</div>
        <div className="product-name">Car Key Ring</div>
        <div className="product-tagline">"For the girl who moves on her own terms."</div>
        <div className="product-desc">A sleek mini car charm that says 'I go where I want.' Whether you drive or just dream about it, this key ring is for the girl with places to be.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">129</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}184</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Crystal Key Ring */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/key-ring-crystal.jpg" alt="Crystal Key Ring" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Key Rings</div>
        <div className="product-name">Crystal Key Ring</div>
        <div className="product-tagline">"A little mystical. A lot beautiful."</div>
        <div className="product-desc">Faceted crystal charms in astronaut design that catch light like magic. Hang these off your bag for that effortless maximalist look — like you've been collecting pretty things your whole life.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">199</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}284</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Hello Kitty Key Ring */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/key-ring-hello-kitty.jpg" alt="Hello Kitty Key Ring" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Key Rings</div>
        <div className="product-name">Hello Kitty Key Ring</div>
        <div className="product-tagline">"A classic. Forever."</div>
        <div className="product-desc">Hello Kitty needs no introduction. This key ring is for the girl who grew up loving her and never stopped. Nostalgia, cuteness, and a bow — all in one.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">199</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}284</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Pouch Bag */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/pouch-bag.jpg" alt="Pouch Bag" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Bags</div>
        <div className="product-name">Pouch Bag</div>
        <div className="product-tagline">"Tiny bag. Big personality."</div>
        <div className="product-desc">A character-printed pouch that's equal parts practical and adorable. Toss in your lip balm, your earphones, your secrets. Small enough to slip in your bag, cute enough to carry alone.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">249</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}356</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Phone Charms */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/phone-charms.jpg" alt="Phone Charms" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Character · Charms</div>
        <div className="product-name">Phone Charms</div>
        <div className="product-tagline">"Your phone. But make it cute."</div>
        <div className="product-desc">Phone charms are back, and they're better than ever. Hang a character charm off your case and instantly transform a boring device into a personalised accessory. Y2K approved.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">229</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}327</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

  </div>{/* /product-grid */}
</section>

{/* ====================== STATIONERY ====================== */}
<section className="catalog-section tinted" id="stationery">
  <div className="section-header">
    <div className="section-header-top">
      <div className="section-rule"></div>
      <div className="section-title-wrap">
        <div className="section-eyebrow">Category Four</div>
        <div className="section-title">Stationery</div>
      </div>
      <div className="section-rule"></div>
    </div>
    <div className="section-meta">
      <span className="section-meta-dot"></span>
      12 products &nbsp;·&nbsp; Writing, Stickers, Lifestyle
    </div>
  </div>

  <div className="product-grid">

    {/* Dollar Pencil */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/dollar-mechanical-pencil.jpg" alt="Dollar Pencil" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Writing</div>
        <div className="product-name">Dollar Pencil</div>
        <div className="product-tagline">"Write rich."</div>
        <div className="product-desc">A novelty dollar-bill pencil that brings a little humour and a lot of style to your pencil case. Why settle for boring when you can write with something that makes people smile?</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">99</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}141</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Fountain Pen */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/fountain-pen.png" alt="Fountain Pen" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Writing</div>
        <div className="product-name">Fountain Pen</div>
        <div className="product-tagline">"Old soul. New notes."</div>
        <div className="product-desc">The weight of it in your hand, the flow of the ink — it makes every note feel intentional. For the girl who takes her journaling seriously.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">129</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}184</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Stationery Set */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/stationary-set.jpg" alt="Stationery Set" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Sets</div>
        <div className="product-name">Stationery Set</div>
        <div className="product-tagline">"Everything you need. All in one."</div>
        <div className="product-desc">A curated collection of stationery essentials — your study desk deserves to look as good as your Instagram feed. One set to organise, create, and make every study session feel a little more you.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">220</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}314</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Sharpener */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/sharpener.jpg" alt="Sharpener" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Writing</div>
        <div className="product-name">Sharpener</div>
        <div className="product-tagline">"Sharp pencils. Sharper mind."</div>
        <div className="product-desc">Not just a sharpener — it's a whole aesthetic moment. Compact, cute, and functional. The kind of thing that lives permanently in your pencil case and gets complimented every time it comes out.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">99</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}141</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Kuromi Notebook */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/notebook-kuromi.jpg" alt="Kuromi Notebook" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Notebooks</div>
        <div className="product-name">Kuromi Notebook</div>
        <div className="product-tagline">"Dark thoughts deserve a dark journal."</div>
        <div className="product-desc">Kuromi on the cover, blank pages inside — ready for your biggest feelings and brightest ideas. Whether you're journaling, doodling, or writing lists, this notebook makes it feel like a moment.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">199</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}284</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Highlighter — 4 types */}
    <div className="product-card">
      <div className="img-multi">
        <div className="variant-pill">4 types</div>
        <div className="img-multi-grid g4">
          <div className="img-slot"><Image src="/highlighter-type-1.jpg" alt="Highlighter type 1" fill className="object-cover" /><div className="img-slot-num">01</div><div className="img-slot-sub">Colour</div></div>
          <div className="img-slot"><Image src="/highlighter-type-2.jpg" alt="Highlighter type 2" fill className="object-cover" /><div className="img-slot-num">02</div><div className="img-slot-sub">Colour</div></div>
          <div className="img-slot"><Image src="/highlighter-type-3.jpg" alt="Highlighter type 3" fill className="object-cover" /><div className="img-slot-num">03</div><div className="img-slot-sub">Colour</div></div>
          <div className="img-slot"><Image src="/highlighter-type-4.jpg" alt="Highlighter type 4" fill className="object-cover" /><div className="img-slot-num">04</div><div className="img-slot-sub">Colour</div></div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Writing</div>
        <div className="product-name">Highlighter</div>
        <div className="product-tagline">"Highlight the important stuff."</div>
        <div className="product-desc">A smooth, vibrant highlighter that makes your notes pop. Study sessions are better with colour — and this one delivers a clean, bright line every single time.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">39</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}56</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Kuromi Stickers */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/sticker-kuromi.jpg" alt="Kuromi Stickers" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Stickers</div>
        <div className="product-name">Kuromi Stickers</div>
        <div className="product-tagline">"Sticker your whole world in Kuromi."</div>
        <div className="product-desc">A sheet of Kuromi stickers for your notebook, your laptop, your water bottle, your entire life. Because everything is better with a little gothic-cute energy on top.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">99</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}141</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* 3D Stickers */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/sticker-3d.jpg" alt="3D Stickers" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Stickers</div>
        <div className="product-name">3D Stickers</div>
        <div className="product-tagline">"Stickers with depth. Literally."</div>
        <div className="product-desc">Puffy, textured, three-dimensional stickers that add serious personality to anything they touch. Your planner, your diary, your best friend's birthday card — all deserve this treatment.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">99</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}141</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Normal Stickers */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/sticker-normal.jpg" alt="Normal Stickers" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Stickers</div>
        <div className="product-name">Normal Stickers</div>
        <div className="product-tagline">"Stick to what you love."</div>
        <div className="product-desc">A mix of cute, aesthetic, and just-right stickers for everyday use. Decorate everything. Personalise everything. Life is too short for blank surfaces.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">65</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}93</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Labubu Stickers */}
    <div className="product-card">
      <div className="img-single">
        <Image src="/sticker-labubu.jpg" alt="Labubu Stickers" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Stationery · Stickers</div>
        <div className="product-name">Labubu Stickers</div>
        <div className="product-tagline">"The mischievous little one. Now in sticker form."</div>
        <div className="product-desc">Labubu — the quirky, pointy-eared character everyone is obsessed with — now as a sticker sheet. Stick them everywhere and confuse everyone who hasn't discovered him yet.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">129</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}184</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Straws per unit — lifestyle */}
    <div className="product-card">
      <div className="img-single">
        <div className="img-lifestyle-tag">Lifestyle</div>
        <Image src="/straw.jpg" alt="Straws per unit" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Lifestyle</div>
        <div className="product-name">Straws (per unit)</div>
        <div className="product-tagline">"Drink cute."</div>
        <div className="product-desc">A single decorative reusable straw that turns any drink into an aesthetic moment. Add it to your tumbler, your cha, your juice — and watch the whole vibe of your drink change.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">40</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}57</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* Straws 4pc — lifestyle */}
    <div className="product-card">
      <div className="img-single">
        <div className="img-lifestyle-tag">Lifestyle</div>
        <Image src="/straws-4-pc-set.jpg" alt="Straws 4pc Packet" fill className="object-cover" />
      </div>
      <div className="product-info">
        <div className="product-cat-tag">Lifestyle</div>
        <div className="product-name">Straws (4pc Packet)</div>
        <div className="product-tagline">"Four straws. Four moods."</div>
        <div className="product-desc">A set of four decorative straws to match every drink, every day, every outfit. Keep a set at home, keep one in your bag, give one to your best friend. Drinking in style is a team sport.</div>
        <div className="product-pricing">
          <div className="price-launch-block">
            <span className="price-currency">{'৳'}</span>
            <span className="price-launch-amt">120</span>
            <span className="price-launch-lbl">Launch</span>
          </div>
          <div className="price-right">
            <span className="price-regular">{'৳'}171</span>
            <span className="price-off-badge">30% OFF</span>
          </div>
        </div>
      </div>
    </div>

  </div>{/* /product-grid */}

  {/* GIFT NOTE BANNER */}
  <div className="gift-banner" style={{marginTop: "3.5rem"}}>
    <div className="gift-banner-inner">
      <span className="gift-banner-icon">✦</span>
      <div className="gift-banner-text">
        <strong>Free Gift on Orders {'৳'}400+</strong> — Pink Clips included automatically with every qualifying order.
        &nbsp;&nbsp;<strong>Minimum order:</strong> {'৳'}250 &nbsp;·&nbsp; <strong>All launch prices</strong> reflect a 30% introductory discount.
      </div>
    </div>
  </div>

</section>

{/* ====================== FOOTER ====================== */}
<footer className="catalog-footer">
  <div className="footer-ornament-row">
    <div className="footer-ornament-line"></div>
    <div className="footer-ornament-dot"></div>
    <div className="footer-ornament-line"></div>
  </div>
  <div className="footer-logo-main">CURIO</div>
  <div className="footer-bangla">{'রহস্য'}</div>
  <div className="footer-note">
    <span>Mystery</span>
    <span className="footer-divider"></span>
    <span>Jewelry</span>
    <span className="footer-divider"></span>
    <span>Hair &amp; Bindis</span>
    <span className="footer-divider"></span>
    <span>Character</span>
    <span className="footer-divider"></span>
    <span>Stationery</span>
    <br /><br />
    All prices include a 30% launch discount · Minimum order {'৳'}250<br />
    Free Pink Clips gift-with-purchase on orders {'৳'}400+
  </div>
  <div className="footer-ornament-row" style={{marginTop: "2rem", marginBottom: "0"}}>
    <div className="footer-ornament-line"></div>
    <div className="footer-ornament-dot"></div>
    <div className="footer-ornament-line"></div>
  </div>
  <div className="footer-bottom">Curated Mystery · Dhaka · 2026</div>
</footer>



      </main>
      <style jsx global>{`

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --parchment: #FFF9D4;
  --parchment-mid: #F5EDB5;
  --ochre: #EAB26B;
  --bark: #442319;
  --bark-60: rgba(68,35,25,0.6);
  --bark-30: rgba(68,35,25,0.3);
  --bark-12: rgba(68,35,25,0.12);
  --bark-06: rgba(68,35,25,0.06);
  --garnet: #6E0000;
  --garnet-soft: rgba(110,0,0,0.08);
  --terracotta: #C36F43;
  --card-bg: #FFFDF0;
}

html { scroll-behavior: smooth; }
body {
  background: var(--parchment);
  color: var(--bark);
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* ─── COVER ─── */
.cover {
  background: var(--garnet);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem 5rem;
  position: relative;
  overflow: hidden;
}
.cover-texture {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(234,178,107,0.025) 60px, rgba(234,178,107,0.025) 61px),
    repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(234,178,107,0.025) 60px, rgba(234,178,107,0.025) 61px);
}
.cover-inner { position: relative; z-index: 1; max-width: 700px; padding-bottom: 2rem; }

.cover-pre {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgba(234,178,107,0.6);
  margin-bottom: 3rem;
}
.cover-ornament-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.cover-ornament-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(234,178,107,0.4), transparent);
}
.cover-ornament-diamond {
  width: 6px;
  height: 6px;
  background: var(--ochre);
  transform: rotate(45deg);
  opacity: 0.6;
}

.cover-logo {
  font-family: 'Playfair Display', serif;
  font-size: clamp(80px, 16vw, 130px);
  font-weight: 700;
  color: var(--parchment);
  letter-spacing: 0.15em;
  line-height: 0.95;
  margin-bottom: 0.6rem;
}
.cover-bangla {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(30px, 6vw, 52px);
  color: var(--ochre);
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.2;
  margin-bottom: 2.5rem;
}
.cover-ornament-row-b {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.cover-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.3em;
  color: rgba(255,249,212,0.5);
  text-transform: uppercase;
  margin-bottom: 3rem;
}
.cover-categories {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: nowrap;
}
.cover-cat-item {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  color: rgba(255,249,212,0.45);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0 1.2rem;
  border-right: 1px solid rgba(234,178,107,0.2);
}
.cover-cat-item:last-child { border-right: none; }

.cover-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.cover-scroll-text {
  font-size: 9px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255,249,212,0.25);
  font-family: 'DM Sans', sans-serif;
}
.cover-scroll-line {
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, rgba(234,178,107,0.4), transparent);
}

/* ─── NAV ─── */
.catalog-nav {
  background: var(--bark);
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  align-items: stretch;
  overflow-x: auto;
  scrollbar-width: none;
  border-bottom: 1px solid rgba(110,0,0,0.6);
}
.catalog-nav::-webkit-scrollbar { display: none; }

.nav-brand {
  font-family: 'Playfair Display', serif;
  color: var(--parchment);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 0 2rem;
  white-space: nowrap;
  border-right: 1px solid rgba(255,249,212,0.08);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.nav-brand-bangla {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: var(--ochre);
  font-weight: 400;
  opacity: 0.7;
}
.nav-links {
  display: flex;
  align-items: stretch;
  flex: 1;
}
.nav-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,249,212,0.45);
  padding: 0 1.4rem;
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}
.nav-link:hover { color: rgba(255,249,212,0.8); }
.nav-link.active { color: var(--ochre); border-bottom-color: var(--ochre); }

.nav-count {
  margin-left: 6px;
  font-size: 9px;
  background: rgba(234,178,107,0.15);
  color: rgba(234,178,107,0.6);
  padding: 1px 5px;
  border-radius: 10px;
  font-weight: 500;
}

/* ─── SECTION ─── */
.catalog-section {
  padding: 5rem 0 6rem;
}
.catalog-section.tinted {
  background: rgba(68,35,25,0.035);
}

.section-header {
  max-width: 1280px;
  margin: 0 auto 3.5rem;
  padding: 0 2.5rem;
}
.section-header-top {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
}
.section-title-wrap { text-align: center; white-space: nowrap; }
.section-rule { flex: 1; height: 1px; background: var(--ochre); opacity: 0.25; }
.section-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 6px;
  opacity: 0.9;
}
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 700;
  color: var(--bark);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1;
}
.section-meta {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: var(--bark-60);
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.section-meta-dot {
  width: 3px;
  height: 3px;
  background: var(--ochre);
  border-radius: 50%;
  display: inline-block;
}

/* ─── PRODUCT GRID ─── */
.product-grid {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.75rem;
}

/* ─── PRODUCT CARD ─── */
.product-card {
  background: var(--card-bg);
  border: 1px solid var(--bark-12);
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(68,35,25,0.1), 0 4px 12px rgba(110,0,0,0.08);
}

/* ─── IMAGE ZONES ─── */

/* single 1:1 image */
.img-single {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--parchment-mid);
  border-bottom: 1px solid var(--bark-06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}
.img-ph-icon {
  width: 36px;
  height: 36px;
  opacity: 0.18;
}
.img-ph-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--bark);
  opacity: 0.35;
}
.img-single img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.img-slot img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.img-slot > *:not(img) {
  position: relative;
  z-index: 1;
}

.img-lifestyle-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--terracotta);
  color: var(--parchment);
  font-size: 8px;
  letter-spacing: 0.15em;
  font-family: 'DM Sans', sans-serif;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 2px;
  font-weight: 600;
}

/* multi-variant image grid */
.img-multi {
  width: 100%;
  border-bottom: 1px solid var(--bark-06);
  position: relative;
}
.img-multi-grid {
  display: grid;
  gap: 1px;
  background: var(--bark-12);
}
.img-multi-grid.g2 { grid-template-columns: 1fr 1fr; }
.img-multi-grid.g3 { grid-template-columns: 1fr 1fr 1fr; }
.img-multi-grid.g4 { grid-template-columns: 1fr 1fr 1fr 1fr; }

.img-slot {
  aspect-ratio: 1 / 1;
  background: var(--parchment-mid);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  position: relative;
}
.img-slot-num {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--bark);
  opacity: 0.18;
  line-height: 1;
}
.img-slot-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 8px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--bark);
  opacity: 0.2;
}

.variant-pill {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--bark);
  color: var(--parchment);
  font-family: 'DM Sans', sans-serif;
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 9px;
  border-radius: 2px;
  z-index: 3;
  font-weight: 500;
}

/* ─── PRODUCT INFO ─── */
.product-info {
  padding: 1.4rem 1.4rem 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.product-cat-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--terracotta);
  font-weight: 500;
  margin-bottom: 0.55rem;
}
.product-name {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 600;
  color: var(--bark);
  line-height: 1.2;
  margin-bottom: 0.5rem;
}
.product-tagline {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  font-style: italic;
  color: var(--bark);
  opacity: 0.65;
  line-height: 1.45;
  margin-bottom: 0.85rem;
}
.product-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  line-height: 1.7;
  color: var(--bark-60);
  margin-bottom: 1.25rem;
  flex: 1;
}
.product-pricing {
  display: flex;
  align-items: flex-end;
  gap: 0;
  padding-top: 1rem;
  border-top: 1px solid var(--bark-06);
  flex-wrap: wrap;
  row-gap: 4px;
}
.price-launch-block { display: flex; align-items: baseline; gap: 4px; }
.price-currency {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--garnet);
  line-height: 1;
  padding-bottom: 2px;
}
.price-launch-amt {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--garnet);
  line-height: 1;
}
.price-launch-lbl {
  font-family: 'DM Sans', sans-serif;
  font-size: 8px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--garnet);
  opacity: 0.7;
  padding-bottom: 3px;
  margin-left: 2px;
}
.price-right {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}
.price-regular {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: var(--bark-30);
  text-decoration: line-through;
  line-height: 1;
}
.price-off-badge {
  background: var(--garnet);
  color: var(--parchment);
  font-family: 'DM Sans', sans-serif;
  font-size: 8px;
  letter-spacing: 0.08em;
  font-weight: 600;
  padding: 3px 7px;
  border-radius: 2px;
  white-space: nowrap;
}

/* ─── MYSTERY TIER LIST ─── */
.tier-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--bark-06);
  padding-top: 0.25rem;
}
.tier-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--bark-06);
}
.tier-row:last-child { border-bottom: none; }
.tier-info { min-width: 0; flex: 1; }
.tier-name {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--bark);
  line-height: 1.3;
}
.tier-items {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--bark-60);
  margin-top: 2px;
}
.tier-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}
.tier-launch {
  display: flex;
  align-items: baseline;
  gap: 3px;
}
.tier-launch-amt {
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 700;
  color: var(--garnet);
  line-height: 1;
}
.tier-regular-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.tier-regular {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  color: var(--bark-30);
  text-decoration: line-through;
  line-height: 1;
}

/* ─── GIFT NOTE ─── */
.gift-banner {
  max-width: 1280px;
  margin: 0 auto 4rem;
  padding: 0 2.5rem;
}
.gift-banner-inner {
  background: var(--bark);
  border-radius: 3px;
  padding: 1rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.gift-banner-icon {
  font-size: 18px;
  opacity: 0.7;
}
.gift-banner-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: rgba(255,249,212,0.75);
  letter-spacing: 0.04em;
  line-height: 1.6;
}
.gift-banner-text strong {
  color: var(--ochre);
  font-weight: 500;
}

/* ─── FOOTER ─── */
.catalog-footer {
  background: var(--bark);
  padding: 4rem 2rem 3rem;
  text-align: center;
  border-top: 2px solid var(--garnet);
}
.footer-ornament-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 300px;
  margin: 0 auto 2rem;
}
.footer-ornament-line {
  flex: 1;
  height: 1px;
  background: rgba(234,178,107,0.25);
}
.footer-ornament-dot {
  width: 5px;
  height: 5px;
  background: var(--ochre);
  border-radius: 50%;
  opacity: 0.4;
}
.footer-logo-main {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 700;
  color: var(--parchment);
  letter-spacing: 0.15em;
  line-height: 1;
  margin-bottom: 4px;
}
.footer-bangla {
  font-family: 'Cormorant Garamond', serif;
  color: var(--ochre);
  font-size: 22px;
  margin-bottom: 2rem;
  opacity: 0.85;
}
.footer-note {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: rgba(255,249,212,0.65);
  line-height: 2;
  max-width: 520px;
  margin: 0 auto;
}
.footer-note span {
  color: var(--ochre);
  opacity: 0.9;
}
.footer-divider {
  width: 1px;
  height: 16px;
  background: rgba(234,178,107,0.3);
  display: inline-block;
  margin: 0 0.75rem;
  vertical-align: middle;
}
.footer-bottom {
  margin-top: 2.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: rgba(255,249,212,0.3);
  font-style: italic;
  letter-spacing: 0.08em;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
    padding: 0 1rem;
  }
  .product-info { padding: 0.9rem 0.9rem 0.8rem; }
  .product-name { font-size: 15px; }
  .product-tagline { font-size: 13px; }
  .product-desc { font-size: 12px; margin-bottom: 0.75rem; }
  .price-launch-amt { font-size: 20px; }
  .price-currency { font-size: 11px; }
  .tier-name { font-size: 13px; }
  .tier-items { font-size: 10px; }
  .tier-launch-amt { font-size: 17px; }
  .tier-row { padding: 0.65rem 0; }
  .section-header { padding: 0 1rem; }
  .gift-banner { padding: 0 1rem; }
  .cover-categories { flex-wrap: wrap; gap: 0.5rem; }
  .cover-cat-item { font-size: 12px; padding: 0 0.75rem; }
  .img-multi-grid.g3 { grid-template-columns: 1fr 1fr 1fr; }
  .img-multi-grid.g4 { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 400px) {
  .product-grid { grid-template-columns: 1fr; }
}

      `}</style>
    </>
  );
}