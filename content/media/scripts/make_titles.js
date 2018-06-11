let getTitle = (function() {

let titles = [
"How Astronomers worked out that the Earth orbits the Sun",
"Terrestrial Planet Formation around Stars",
"A Review of Transiting Extra-Solar Planets",
"Patterns of Elemental Abundances in the Solar System",
"The abundance pattern of the most iron-poor star known",
"Type Ia supernovae and evolution: a new perspective",
"Fast Optical Transients from YSTAR",
"X-ray Vision: Peering Through the Interstellar Medium",
"Spectral line formation in non-LTE: why bother?",
"Who was Australia's first Millionaire champ?",
"The drivers for star formation in the local universe",
"When Galaxies Explode! - Starburst-Driven Galactic Winds",
"When Science-Fiction meets Science: Dyson Spheres and Other Strange Research",
"DSP and FPGAs in Radio Astronomy",
"Life in the Dungeon - a lesson in instrumentation",
"11 weeks in the Arctic: Polar and climate research on the icebreaker R/V Polarstern",
"Dry Earth, Wet Mars?",
"What happens in the sky, in the twinkling of an eye?: Fast Optical Transients",
"An Inconvenient Hotspot",
"Convection, granulation and entropy: a look at the results from solar 3D model atmospheres",
"Uncovering the Early Evolutionary Stages of Massive Star Formation",
"Understanding Magnetic Fields through Radio Observations",
"Using Baryonic Acoustic Oscillations (BAOs) to probe Dark Energy",
"Development tools for planetary exploration",
"UNSW Extrasolar Planet Search Candidates: Follow-up Photometry and Analysis",
"ChICCAGO: Chasing the Identity of Compact And Complex ASCA Galactic Objects",
"Some Super-Earths Form in Super Snowstorms",
"Detection of Small Kuiper Belt Objects (KBOs) by Stellar Occultation",
"Resolution, Regularisation and Revolutions",
"The Radial Velocity Perturbation Caused by an Extra-Solar Moon",
"Rotationally Challenged Neutron Stars",
"Turning the Time Arrow: The Evolutionary History of the Local Universe",
"Adventures Through Active Galactic Nuclei",
"The Effect of Non-Ideal Magnetohydrodynamics on Disc winds from Protoplanetary Discs",
"The GALAH in the Hat",
"Newton, Kepler and Einstein walk into a bar...",
"Hunting for Thing 1 and Thing 2",
"Extracting energy from the universe's expansion: can we avoid the heat death?",
"The core problem: the Milky Way's bulge and its role in Galactic evolution",
"FROM LAMPS TO QUASARS: An unforgettable journey",
"Fall back disks and the end of the common envelope phase.",
"In Search of Lost Shocks",
"Making Science Interesting",
"Introduction to Protoplanetary Disks",
"Coming soon...",
"How to build a CubeSat (for Meatbags)",
"Probing metallicity gradients and the radiation field in Seyfert narrow-line regions",
"MCMC101 - a fun tour of this Magical Creature’s inner workings",
"Exploring Cultural Competency For Astronomers",
"I'm Batman. (And here's why...)",
"Winds from Protoplanetary Discs",
"The SkyHopper Space Telescope",
"Magnetic Fields and Diffuse Polarisation",
"np.fft.fft2",
"Meeting People in the 31st Century",
"MINERVA-Australis: Detecting exoplanets so close, you can smell them!",
"Faster N-Body Simulations using Spatial Hierarchies and GPGPUs",
"Too Close, But Yet Too Far: The Common Envelope Interaction of Triple Systems",
"Mass and eccentricity constraints on the planetary debris orbiting the white dwarf WD 1145+017",
"Shifting Paradigms: Extraordinary science and the future of INTEGRAL",
"Measuring the infrared sky background in Antarctica",
"I trained a classifier and now I don’t know what to do with it",
"Hydroxyl as a Probe of the Galaxy's Missing Mass",
"Tiny grains shining bright in the gaps of Herbig Ae Transitional Discs",
"The distribution and evolution of starspots on rapidly rotating solar-type stars",
"A population of infrared bright very small grains in the gap of Herbig Ae transition discs",
"Obtaining High Resolution Image Data of LEO Objects using Adaptive Optics and Lucky Imaging",
"Hitchhikers Guide to UV Astronomy",
"Tango Magic - Pulsating stars in binary systems",
"The Restaurant at the End of the Universe",
"The Effect of Non Ideal Magnetohydrodynamics on Disc winds from Protoplanetary Discs",
"Is Magrathea really “The Impossible Planet”?",
"Exoplanet discovery with the open source citizen science Project PANOPTES",
"Don't Panic: Climate change is a HOAX!!",
"Mysterious Origin of Positrons in the Milky Way",
"Terrestrial Constraints on Extraterrestrial Intelligence",
"High-z, Panic Free",
"The relationship between Structural and Dynamical …lation for Early Type Galaxies in the SAMI Survey",
"Hermite decomposition of line profile in an effort to quantify intrinsic radial velocity",
"Improved Light Coupling Efficiency for Single Mode Fibre Spectroscopy",
"Bubbles and Magnets",
"Full data release of the S7",
"The Milky Way’s SMBH: Mostly Harmless?!",
"Murchison Widefield Array: Science and technology on the path to SKA",
"Fireballs, the ionosphere, and space debris from the MWA",
"A multi-frequency radio continuum study of the Magellanic Clouds",
"Engineering Development Array: A low frequency radio telescope utilising SKA precursor technology",
"The First Data Release of SkyMapper's Southern Sky Survey",
"The SkyMapper Search for Extremely Metal-Poor Stars in the Galactic Halo",
"An atlas of SFR changes in nearby galaxies from SkyMapper",
"The SkyMapper High-Redshift Quasar Survey",
"Update on the SkyMapper Transient Survey:  type Ia supernovae and other transients",
"A First SkyMapper Variability Census and the Search for Counterparts to High-energy Events",
"Opening the dynamic infrared sky with DREAMS",
"The Huntsman observing systems: the frontier of extremely low surface brightness observations",
"CACAO: A Cheap And Compact Adaptive Optics system",
"LSST and Australia",
"Maunakea melting pot: Opportunities for Australia with EAO",
"HI accretion, the Cosmic Web and WALLABY early science",
"Scientific validation of ASKAP continuum data",
"The cold gas reservoir feeding an adolescent radio galaxy",
"The discovery of a population of bright fast radio bursts with the Australia Square Kilometre Array Pathfinder",
"Constraints on the radial extent of debris disks from unresolved continuum emission",
"The effect of non-ideal MHD on disc winds from protoplanetary discs",
"Tiny grains shining bright in the gaps of Herbig Ae transition discs",
"Binary Star Formation and the Outflows from their Discs",
"Low luminosity thermonuclear supernovae as the origin of most Galactic antimatter",
"Recent Anisotropy Studies With The Pierre Auger Cosmic Ray Observatory",
"Detecting high-energy cosmic particles with radio telescopes",
"A quantum of darkness: making particles invisible",
"Triggering AGN in galaxy clusters",
"The relationship of AGN feedback by relativistic jets to the spectra of Gigahertz Peak Spectrum and Compact Steep Spectrum radio sources",
"Catching Feedback in the Act at the Sub-kpc Scale",
"DRAGONS: AGN quenching of high redshift star formation in ZF-COSMOS-20115",
"Using Broad Absorption Lines to Illuminate Quasar Structure",
"Stellar Astrophysics with Cassini: Syzygies, Stardust and the Sizes of Stars",
"Detection of young stars in the large spectroscopic surveys",
"Polarisation due to rotational distortion in the bright star Regulus",
"Observations of radio stars with geodetic VLBI",
"Chasing Low Frequency Radio Bursts from Magnetically Active Stars",
"An update on the MWA EoR Experiment",
"Toward the Epoch of Reionisation: challenges and progress on the path to the Early Universe",
"Challenging EoR Challenges with Array Redundancy",
"Modelling High-z Galaxy Formation and the EoR with semi-analytics",
"Exploring Reionization With Semi-Analytics: The Escape Fraction Strikes Back",
"Bubbles at dawn",
"The FunnelWeb Survey: Exoplanet and Galactic Science in the Gaia Era",
"Astrophysical Standards for FunnelWeb’s Label-based Stellar Parameter Pipeline",
"Project PANOPTES: Finding exoplanets with digital cameras and citizen-science",
"Cool stars, exoplanets and Veloce",
"Veloce Rosso construction progress",
"The TOLIMAN space telescope",
"CAASTRO-3D: The ARC Centre of Excellence in All-Sky Astrophysics in 3-Dimensions",
"Probing effects of telescope resolution with synthetic observations of galaxy simulations",
"The intrinsic shape of galaxies",
"Fornax3D - Surveying the Fornax Cluster with MUSE",
"Session 12 – The Galactic Centre",
"Gamma-rays and Gas in the Galactic Centre",
"Shock Waves in the Unusual Galactic Centre Molecular Clouds",
"Atomic Hydrogen Clouds Tracing the Galactic Nuclear Outflow",
"CO Observations of the Ursa Major Molecular Clouds at High Galactic Latitudes",
"Constraints on the nature of Dark Energy from OzDES",
"Reverberation Mapping in Bulk with DES/OzDES",
"A new CMB lensing measurement from 500 square degrees of SPTpol data",
"A Blinded Determination of H_0 from Low-Redshift Type Ia Supernovae, Calibrated by Cepheid Variables",
"The Properties of The Fast Radio Burst population",
"Discovering radio transients using Triggered and Targeted observations",
"KEGS - The Kepler Extra-Galactic Survey",
"DECam detection and Keck Spectroscopy of Ongoing High Redshift Superluminous Supernovae",
"DASH: Deep Learning for the Automated Spectral Classification of Supernovae",
"The Zadko Telescope: Exploring the transient Universe",
"Searching for Ultra-Violet Gravitational Wave Counterparts with GLUV",
"Star Formation, Turbulence, and Transport: A Unified Model of Galaxy Discs",
"Star formation within one parsec of the supermassive black hole at the Galactic Centre",
"Star formation and physical processes in galaxies at radio wavelengths",
"Hunting for cold gas with HI absorption",
"Investigation of Coherent Star Formation in SAMI Galaxies",
"Unravelling the prestellar phase of star formation using Planck cold cores",
"Investigating globular cluster abundance anomalies in SMC Intermediate-Age Star Clusters",
"Tracing extratidal stars of globular clusters",
"Mapping the Magellanic Outskirts with DECam",
"An X-ray Expansion and Proper Motion Study of a Young Supernova Remnant in the Large Magellanic Cloud",
"Galactic scale feedback from relativistic jets",
"Magnetic fields of a Galactic Supershell",
"Gas Temperature Demography and the HI-to-H2 Transition in the Magellanic Clouds",
"Shining Light on the Dark Milky Way: Probing our Galaxy’s Hidden Gas",
"Extreme Events - Exploring the Transient Universe",
"The Taipan Galaxy Survey",
"Taipan Peculiar Velocity Survey",
"Improved constraints on the growth rate of structure from modelling cross-correlation in the 6dF Galaxy Survey",
"Chasing the bright end of the z &gt; 8 galaxy luminosity function: followup imaging of galaxies during reionisation with Spitzer IRAC",
"The SMBH-Galaxy Correlation for Milky Way and Andromeda-mass Progenitors Since z=2.5",
"Update on the Giant Magellan Telescope project",
"An update on progress towards the Square Kilometre Array: engineering, science and governance",
"Science with Veloce - Australia's New Planet Foundry",
"Imaging planet formation and stellar mass-loss with VAMPIRES",
"The Maunakea Spectroscopic Explorer",
"High Energy Neutrino Astronomy with IceCube at the South Pole",
"First detection of bifurcated blue straggler sequences in young globular clusters",
"Silicates in the embedded YSOs and the ISM revealed by Mid-IR spectroscopy",
"Distributions of short-lived radio isotopes in the galactic disk",
"Optical and radio bubbles around rapidly-feeding stellar-mass black holes",
"Measuring binary orbits with high-precision VLBI astrometry",
"The first black hole – white dwarf binary discovered in the Galaxy",
"Calibrations of radio continuum, mid-infrared and UV star formation rate indicators",
"The drivers of Stellar Population in Early-Type Galaxies",
"Do Massive Galaxies Dance in Crowds?",
"Cosmic Clocks: the Radius Velocity Reltionship of Disc Galaxies",
"Spatially-resolved measurements of nebular parameters in AGN including arbitrary narrow line region (NLR) - HII region mixing",
"Searching for Young Exoplanets with High-Contrast Imaging in the Near Infrared",
"Diffraction limited and high contrast imaging of circumstellar environments at the AAT",
"Mapping young suns and searching for their exoplanets",
"TRAPPIST-1 and other resonant chain planetary systems",
"Gas clumps near hot stars cause extreme radio scattering",
"Interpreting the results of large, multi-molecular-line datasets of the molecular ISM",
"Searching for Molecular Building Blocks at Low Frequencies",
"Abiotic Chemical Disequilibria In Exo-Earth Atmospheres: Improving Future Biosignature Detections By Identifying False Positives",
"Cracks in LCDM: real or imagined?",
"Measuring the mass of galaxy clusters with cosmic microwave background lensing",
"Resolving the Disk-Halo Degeneracy",
"Revolutions in polarisation: Leveraging next-generation radio telescopes and Faraday rotation to unveil the magnetised structure of radio galaxies",
"The many muses of radio variability from the ATESE survey",
"Mid-Infrared Observations with CanariCam on the Gran Telescopio Canarias",
"Shaping the circumgalactic medium through radio-loud AGN interactions on kpc scales",
"The survival of cold gas in the Circumgalactic Medium",
"Differentiating between black hole populations from GW observations of merger events",
"Searching for the first EM counterparts to gravitational waves in aLIGO second science run",
"Gravitational-wave spectroscopy and tests of the no-hair theorem",
"AGN Reverberation Mapping with OzDES",
"Fundamentally confused? Nature, nurture and radio galaxy scaling relations.",
"Updating the Supermassive Black Hole Mass - Spiral Arm Pitch Angle Correlation: a Strong Correlation for Galaxies with Pseudobulges",
"Using Microlensing to Probe Strong Gravity Near Supermassive Black Holes",
];

let m = markov.create();
titles.map(a => Array.from({length: a.length}, (x,i) => i).map(b => (a + '***').slice(b, b + 3))).map(a => markov.update(m, a));

function getTitle() {
    return markov.run(m).map(a => a[0]).join('');
}

return getTitle;

}).call(this)
