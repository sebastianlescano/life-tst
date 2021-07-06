import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import VRIShell from '../components/VRIShell/VRIShell';
import Pillar from '../components/Pillar';
import styles from '../styles/Home.module.scss';

export default function Home() {
    const [activeWord, setactiveWord] = useState(0),
        words = [
            'depression',
            'IBS',
            'cancer',
            'aging',
            'chronic disease',
            'etc..',
            'Illness.',
        ];

    useEffect(() => {
        const interval = setInterval(() => {
            setactiveWord((prevCounter) => (prevCounter + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [activeWord]);

    return (
        <VRIShell>
            <section className={styles.hero}>
                <picture>
                    <source
                        srcSet="/images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash.jpg 1x, /images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash@2x.jpg 2x, /images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash@3x.jpg 3x"
                        media="(min-width: 1200px)"
                        type="image/jpeg"
                    />
                    <source
                        srcSet="/images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash-copy.jpg 1x, /images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash-copy@2x.jpg 2x, /images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash-copy@3x.jpg 3x"
                        media="(min-width: 768px)"
                        type="image/jpeg"
                    />
                    <source
                        srcSet="/images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash-copy-2.png 1x, /images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash-copy-2@2x.png 2x, /images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash-copy-2@3x.png 3x"
                        media=""
                        type="image/jpeg"
                    />
                    <img
                        alt="VLS hero"
                        srcSet="/images/brooke-cagle-qj-1-j-4-h-od-nt-i-unsplash-copy-2.png"
                        loading="lazy"
                    />
                </picture>
                <div className={styles.body}>
                    <h1>
                        Imagine a world without{' '}
                        <ul>
                            {words.map((word, idx) => (
                                <li
                                    key={word}
                                    className={classNames(
                                        activeWord === idx && styles.active,
                                        ((activeWord === words.length - 1 &&
                                            idx === 0) ||
                                            activeWord + 1 === idx) &&
                                            styles.next,
                                    )}
                                >
                                    {word}
                                </li>
                            ))}
                        </ul>
                    </h1>
                </div>
            </section>
            <section className={styles.fourPillars}>
                <div className={styles.wrapper}>
                    <h2>The Four Pillars of Viome Life Sciences</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo. Duis auteter irure dolor in reprehenderit in
                        voluptate.
                    </p>
                    <div className={styles.pillars}>
                        <Pillar
                            data={{
                                header: 'Prevention',
                                text: 'Using food as medicine to intercept chronic diseases, cancers, & aging.',
                                back: () => (
                                    <p>
                                        Our testing services, with over 250, 000
                                        users, provides health insights based on
                                        biological samples + medical
                                        history(drugs, symptoms, diseases).
                                        <br />
                                        <br />
                                        Viome’s recommendations are designed to
                                        modulate the microbial functions via
                                        nutrition and indirectly influences
                                        human physiology in order to slow aging,
                                        improve health, and reduce chronic
                                        inflammation.
                                    </p>
                                ),
                            }}
                            styles={styles}
                        />
                        <Pillar
                            data={{
                                header: 'Prediction',
                                text: 'Developing biomarkers that are indicative of chronic diseases, cancers, & aging.',
                                back: () => (
                                    <p>
                                        Based on longitudinal data from our
                                        testing services, we are able to develop
                                        biomarkers for most chronic diseases,
                                        cancers, and aging. With every test we
                                        are able to see an individual’s
                                        progression towards or away from a
                                        disease biomarker.
                                    </p>
                                ),
                            }}
                            styles={styles}
                        />
                        <Pillar
                            data={{
                                header: 'Diagnostics',
                                text: 'Using food as medicine to intercept chronic diseases, cancers, & aging.',
                                back: () => (
                                    <p>
                                        Our predictive biomarkers give us the
                                        hypothesis to do clinical research in
                                        order to identify the signature of
                                        chronic diseases, cancers, and aging.
                                    </p>
                                ),
                            }}
                            styles={styles}
                        />
                        <Pillar
                            data={{
                                header: 'Therapeutics',
                                text: 'Developing precision medicine for chronic disease, cancers, & aging.',
                                back: () => (
                                    <p>
                                        The signatures found through diagnostics
                                        allow us to determine the mechanism of
                                        action to develop precision therapeutics
                                        in the form of drugs and vaccines.
                                        <br />
                                        <br />
                                        Viome can determine drug effectiveness,
                                        including immunotherapy, which is
                                        dependent upon the gut microbiome.
                                    </p>
                                ),
                            }}
                            styles={styles}
                        />
                    </div>
                </div>
            </section>
            <section className={styles['vri--home-top']}>
                <div className={styles['vri--home__menu']}>
                    <Link href="/tests">
                        <a className={styles['vri--home__menu-item']}>
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet="/images/VRI/home/home-kits-xl.jpg 1x,
                          /images/VRI/home/home-kits-xl@2x.jpg 2x,
                          /images/VRI/home/home-kits-xl@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <source
                                    media="(max-width: 1439px)"
                                    srcSet="/images/VRI/home/home-kits.jpg 1x,
                          /images/VRI/home/home-kits@2x.jpg 2x,
                          /images/VRI/home/home-kits@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <img
                                    src="/images/VRI/home/home-kits.jpg"
                                    loading="lazy"
                                    alt="VRI Kits"
                                    type="image/jpeg"
                                />
                            </picture>
                            <div
                                className={classNames(
                                    'vri__button',
                                    styles.vri__button,
                                    styles['vri__button--learn'],
                                    'vri__button--learn',
                                )}
                            >
                                Our Tests{' '}
                                <img
                                    src="/images/VRI/forward-pointer-arrow-dark.svg"
                                    alt="arrow"
                                />
                            </div>
                        </a>
                    </Link>
                    <Link href="/studies">
                        <a className={styles['vri--home__menu-item']}>
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet="/images/VRI/home/home-studies-xl.jpg 1x,
                          /images/VRI/home/home-studies-xl@2x.jpg 2x,
                          /images/VRI/home/home-studies-xl@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <source
                                    media="(max-width: 1439px)"
                                    srcSet="/images/VRI/home/home-studies.jpg 1x,
                          /images/VRI/home/home-studies@2x.jpg 2x,
                          /images/VRI/home/home-studies@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <img
                                    src="/images/VRI/home/home-studies.jpg"
                                    loading="lazy"
                                    alt="VRI Studies"
                                    type="image/jpeg"
                                />
                            </picture>
                            <div
                                className={classNames(
                                    'vri__button',
                                    styles.vri__button,
                                    styles['vri__button--learn'],
                                    'vri__button--learn',
                                )}
                            >
                                Our Studies{' '}
                                <img
                                    src="/images/VRI/forward-pointer-arrow-dark.svg"
                                    alt="arrow"
                                />
                            </div>
                        </a>
                    </Link>
                    <Link href="/grants">
                        <a className={styles['vri--home__menu-item']}>
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet="/images/VRI/home/home-grants-xl.jpg 1x,
                          /images/VRI/home/home-grants-xl@2x.jpg 2x,
                          /images/VRI/home/home-grants-xl@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <source
                                    media="(max-width: 1439px)"
                                    srcSet="/images/VRI/home/home-grants.jpg 1x,
                          /images/VRI/home/home-grants@2x.jpg 2x,
                          /images/VRI/home/home-grants@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <img
                                    src="/images/VRI/home/home-grants.jpg"
                                    loading="lazy"
                                    alt="VRI Grants"
                                    type="image/jpeg"
                                />
                            </picture>
                            <div
                                className={classNames(
                                    'vri__button',
                                    styles.vri__button,
                                    styles['vri__button--learn'],
                                    'vri__button--learn',
                                )}
                            >
                                Our Grants{' '}
                                <img
                                    src="/images/VRI/forward-pointer-arrow-dark.svg"
                                    alt="arrow"
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <h3>
                    <strong>OUR MISSION</strong>
                    <br />
                    As the research arm of Viome, VRI’s mission is to develop
                    world-leading technology and make it available to the
                    consumer and patient, so they can take control of their own
                    health, increase healthspan, and live a great, worry-free
                    life.
                </h3>
            </section>

            <section className={styles['vri__columns--two']}>
                <div className={styles['vri__columns--left']}>
                    <div
                        className={classNames(
                            styles['vri__site-nav'],
                            styles['vri__site-nav--disabled'],
                        )}
                    >
                        <nav className={styles.navbar}>
                            <button
                                className={classNames(
                                    styles['navbar-toggler'],
                                    styles.collapsed,
                                )}
                                type="button"
                                data-toggle="collapse"
                                data-target="#submenu"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle subnav"
                                disabled=""
                            >
                                <div className={styles['vri__site-nav__top']}>
                                    <h6>Focus Areas</h6>
                                    <img
                                        src="/images/VRI/down-arrow-dark.svg"
                                        alt="VIOME"
                                    />
                                </div>
                            </button>
                        </nav>
                        <div
                            className={classNames(
                                styles.collapse,
                                styles['navbar-collapse'],
                            )}
                            id="submenu"
                        >
                            <ul>
                                <li className={styles['vri__site-nav--top']}>
                                    Focus Areas
                                </li>
                                <li>
                                    <a
                                        href="#home-1"
                                        data-anchor="home-1"
                                        className=""
                                    >
                                        Develop consumer-friendly tests
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#home-2"
                                        data-anchor="home-2"
                                        className=""
                                    >
                                        Maintain a comprehensive clinical
                                        research portfolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#home-3"
                                        data-anchor="home-3"
                                        className=""
                                    >
                                        Collaborate with World-class scientists
                                        and clinicians
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#home-4"
                                        data-anchor="home-4"
                                        className="active"
                                    >
                                        Offer grants to researchers World-wide
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles['vri__columns--right']}>
                    <div className={styles['vri--home__body']}>
                        <div
                            className={styles['vri--home__body-item']}
                            id="home-1"
                        >
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet="/images/VRI/home/home-kits-body-xl.jpg 1x,
                            /images/VRI/home/home-kits-body-xl@2x.jpg 2x,
                            /images/VRI/home/home-kits-xl@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <source
                                    media="(max-width: 1439px)"
                                    srcSet="/images/VRI/home/home-kits-body.jpg 1x,
                            /images/VRI/home/home-kits-body@2x.jpg 2x,
                            /images/VRI/home/home-kits-body@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <img
                                    src="/images/VRI/home/home-kits-body.jpg"
                                    loading="lazy"
                                    alt="VRI Kits - body"
                                    type="image/jpeg"
                                />
                            </picture>
                            <div
                                className={styles['vri--home__body-item__text']}
                            >
                                <h2>Develop consumer-friendly tests</h2>
                                <p>
                                    VRI develops clinical-grade tests for stool,
                                    blood, saliva, vaginal samples, etc., that
                                    allow us to better understand the human body
                                    - at a deep molecular level. These insights
                                    enable Viome to make data-driven and
                                    personalized nutritional recommendations,
                                    which include foods and supplements. Viome’s
                                    consumer-friendly tests utilize samples that
                                    can be collected by anyone, anywhere,
                                    without the need for a healthcare
                                    provider.&nbsp;
                                </p>
                                <Link href="/tests">
                                    <a
                                        className={classNames(
                                            'vri__button',
                                            'vri__button--outline',
                                            styles.vri__button,
                                            styles['vri__button--outline'],
                                        )}
                                    >
                                        Our Tests
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div
                            className={styles['vri--home__body-item']}
                            id="home-2"
                        >
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet="/images/VRI/home/home-studies-body-xl.jpg 1x,
                            /images/VRI/home/home-studies-body-xl@2x.jpg 2x,
                            /images/VRI/home/home-studies-xl@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <source
                                    media="(max-width: 1439px)"
                                    srcSet="/images/VRI/home/home-studies-body.jpg 1x,
                            /images/VRI/home/home-studies-body@2x.jpg 2x,
                            /images/VRI/home/home-studies-body@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <img
                                    src="/images/VRI/home/home-studies-body.jpg"
                                    loading="lazy"
                                    alt="VRI Studies - body"
                                    type="image/jpeg"
                                />
                            </picture>
                            <div
                                className={styles['vri--home__body-item__text']}
                            >
                                <h2>
                                    Maintain a comprehensive clinical research
                                    portfolio
                                </h2>
                                <p>
                                    VRI has a comprehensive clinical research
                                    program that has already enrolled more than
                                    10,000 study participants in more than 20
                                    chronic disease areas. Our clinical research
                                    programs generate accurate clinical and
                                    molecular data from people with different
                                    conditions and healthy participants. Using
                                    artificial intelligence and machine learning
                                    we gain a deeper insight into the root
                                    causes of chronic diseases. The goals of VRI
                                    clinical research programs are to develop:
                                </p>

                                <ul>
                                    <li>
                                        Better diagnostic tests that can
                                        identify early signs and symptoms of
                                        diseases, so we can prevent the disease,
                                        instead of managing the symptoms.
                                    </li>
                                    <li>
                                        Find new molecular markers of disease.
                                    </li>
                                    <li>
                                        Better companion diagnostic tests, which
                                        will help identify the best choice of
                                        therapy.
                                    </li>
                                    <li>
                                        Precision nutritional therapies that
                                        include diet and supplements and are
                                        solely based on the high-resolution data
                                        obtained from each person, and not
                                        generic recommendations for everyone.
                                    </li>
                                </ul>
                                <Link href="/studies">
                                    <a
                                        className={classNames(
                                            'vri__button',
                                            'vri__button--outline',
                                            styles.vri__button,
                                            styles['vri__button--outline'],
                                        )}
                                    >
                                        Our Studies
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div
                            className={styles['vri--home__body-item']}
                            id="home-3"
                        >
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet="/images/VRI/home/home-team-body-xl.jpg 1x,
                            /images/VRI/home/home-team-body-xl@2x.jpg 2x,
                            /images/VRI/home/home-team-xl@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <source
                                    media="(max-width: 1439px)"
                                    srcSet="/images/VRI/home/home-team-body.jpg 1x,
                            /images/VRI/home/home-team-body@2x.jpg 2x,
                            /images/VRI/home/home-team-body@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <img
                                    src="/images/VRI/home/home-team-body.jpg"
                                    loading="lazy"
                                    alt="VRI Team - body"
                                    type="image/jpeg"
                                />
                            </picture>
                            <div
                                className={styles['vri--home__body-item__text']}
                            >
                                <h2>
                                    Collaborate with World-class scientists and
                                    clinicians
                                </h2>
                                <p>
                                    We collaborate with top scientists at
                                    premier organizations, such as UCLA, the
                                    Mayo Clinic, GlaxoSmithKline (GSK), NYU, and
                                    many others.&nbsp;
                                </p>
                            </div>
                        </div>
                        <div
                            className={styles['vri--home__body-item']}
                            id="home-4"
                        >
                            <picture>
                                <source
                                    media="(min-width: 1440px)"
                                    srcSet="/images/VRI/home/home-grants-body-xl.jpg 1x,
                            /images/VRI/home/home-grants-body-xl@2x.jpg 2x,
                            /images/VRI/home/home-grants-xl@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <source
                                    media="(max-width: 1439px)"
                                    srcSet="/images/VRI/home/home-grants-body.jpg 1x,
                            /images/VRI/home/home-grants-body@2x.jpg 2x,
                            /images/VRI/home/home-grants-body@3x.jpg 3x"
                                    type="image/jpeg"
                                />
                                <img
                                    src="/images/VRI/home/home-grants-body.jpg"
                                    loading="lazy"
                                    alt="VRI Grants - body"
                                    type="image/jpeg"
                                />
                            </picture>
                            <div
                                className={styles['vri--home__body-item__text']}
                            >
                                <h2>Offer grants to researchers World-wide</h2>
                                <p>
                                    This approach provides unlimited free tests
                                    to our partners, and uses Viome’s commercial
                                    platform to rapidly bring the research
                                    findings to the market for the benefit of
                                    the people.
                                </p>
                                <Link href="/grants">
                                    <a
                                        className={classNames(
                                            'vri__button',
                                            'vri__button--outline',
                                            styles.vri__button,
                                            styles['vri__button--outline'],
                                        )}
                                    >
                                        Our Grants
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles['vri--home-footer']}>
                <div className={styles['vri--home-footer-wrapper']}>
                    <h2>Capabilities</h2>
                    <div className={styles['vri--home-footer-item']}>
                        <img
                            src="/images/VRI/home/home-lab.svg"
                            alt="VIOME - Lab"
                        />
                        <div className={styles['vri--home-footer__text']}>
                            <h3>Laboratory/Bioinformatics</h3>
                            <p
                                className={
                                    styles['vri--home-footer__text-left']
                                }
                            >
                                VRI develops and improves Viome tests, and
                                clinically validates them. Most of the tests
                                developed by VRI use RNA sequencing
                                (transcriptomic and metatranscriptomic) methods
                                for multiple types of human clinical samples
                                (stool, blood, saliva, vaginal fluid, plasma,
                                etc). VRI regularly uses:
                            </p>
                            <ul
                                className={
                                    styles['vri--home-footer__text-left']
                                }
                            >
                                <li>
                                    R&amp;D and CLIA-licensed in-house
                                    laboratories for sample analyses.
                                </li>
                                <li>CLIA-licenced NovaSeq 6000 sequencer</li>
                                <li>
                                    CLIA-licenced, cloud-based, high-resolution
                                    bioinformatic analyses
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['vri--home-footer-item']}>
                        <img
                            src="/images/VRI/home/home-ai.svg"
                            alt="VIOME - AI"
                        />
                        <div className={styles['vri--home-footer__text']}>
                            <h3>
                                Data science/machine learning/artificial
                                intelligence (DS/ML/AI)
                            </h3>
                            <p>
                                VRI uses cloud-based computing infrastructure to
                                analyze vast amounts of molecular and clinical
                                data every day. Using this system we have
                                already built machine-learnt models for many
                                chronic diseases from large clinical studies, as
                                well as symptoms and phenotypes from internal
                                big-data analytics, which includes prediction of
                                Biological Age and Glycemic Response. These
                                data-driven insights offer strategies for highly
                                personalized nutritional recommendations.
                                Moreover, VRI has developed several diagnostic
                                tests of high potential clinical value. One such
                                test is for diagnosis of oral cancer, for which
                                VRI is seeking FDA approval.
                            </p>
                        </div>
                    </div>
                    <div className={styles['vri--home-footer-item']}>
                        <img
                            src="/images/VRI/home/home-translational-science.svg"
                            alt="VIOME - Translational science"
                        />
                        <div className={styles['vri--home-footer__text']}>
                            <h3>Translational science</h3>
                            <p>
                                Translational science identifies patterns in
                                biochemical pathways, which allow translation of
                                Omics data into personalized food precision
                                supplements, and clinical trial interventions.
                                Our proprietary systems biology approach is used
                                to reconstruct custom pathways and interpret
                                human-microbiome network interactions at scale.
                                The resulting scores report on unique functional
                                profiles of Cellular, Mitochondrial, and Gut
                                Microbiome Health and are used for personalizing
                                recommendations with molecular-level precision.
                                For example, which microbes are actually active
                                and what they are producing, how might the gut
                                lining be imapcted, which digestive or immune
                                system functions need to be addressed.. Both
                                human and microbial perspectivescombined, allow
                                us to create specialized integrative scores that
                                can describe the current state of a person’s
                                health.
                            </p>
                            <br />
                            <p>
                                Some of the scores we assess include: Butyrate
                                Production Pathways, Mitochondrial Biogenesis
                                Pathways, Energy Production, Methane Gas
                                Production Pathways, Sulfide Gas Production
                                Pathways, Salt Stress Pathways, Inflammatory
                                Activity, Metabolic Fitness, Protein
                                Fermentation, Cellular Senescence, Stress
                                Response Health, Immune System Healthand more.
                                Using these analyses, Viome provides
                                personalized, optimal nitrition recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </VRIShell>
    );
}
