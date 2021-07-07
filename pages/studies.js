import Head from 'next/head';
import classNames from 'classnames';
import VRIShell from '../components/VRIShell/VRIShell';
import styles from '../styles/Studies.module.scss';

export default function Studies() {
    return (
        <>
            <Head>
                <title>Viome Life Sciences - Studies | Viome</title>
                <meta
                    name="description"
                    content="See Viome&#039;s ongoing clinical research studies and sign-up to participate. Help us better understand connections between the microbiome and your health."
                />
                <meta name="keywords" content="gut microbiome testing" />
                <meta
                    property="og:url"
                    content="http://www.viomelifesciences.com/studies"
                />
                <meta
                    property="og:title"
                    content="Viome Life Sciences - Studies"
                />
                <meta
                    property="og:description"
                    content="See Viome&#039;s ongoing clinical research studies and sign-up to participate. Help us better understand connections between the microbiome and your health."
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="title" content="Viome Life Sciences - Studies" />
                <link
                    rel="canonical"
                    href="http://www.viomelifesciences.com/studies"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/studies"
                    hrefLang="en-us"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/studies"
                    hrefLang="x-default"
                />
            </Head>
            <VRIShell>
                <section className={styles.vri__hero}>
                    <h1>Studies</h1>
                </section>

                <section className={styles['vri__columns--two']}>
                    <div className={styles['vri__columns--left']}>
                        <div className={styles['vri__site-nav']}>
                            <nav className={styles.navbar}>
                                <button
                                    className="navbar-toggler collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#submenu"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle subnav"
                                >
                                    <div
                                        className={styles['vri__site-nav__top']}
                                    >
                                        <h6>PAGE OVERVIEW</h6>
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
                                    <li
                                        className={styles['vri__site-nav--top']}
                                    >
                                        PAGE OVERVIEW
                                    </li>
                                    <li>
                                        <a
                                            href="#active-studies"
                                            data-anchor="active-studies"
                                        >
                                            Active Studies
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#completed-studies"
                                            data-anchor="completed-studies"
                                        >
                                            Completed Studies
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles['vri__columns--right']}>
                        <div className={styles.vri__body}>
                            <h3>
                                VRI has a comprehensive clinical research
                                program that has already enrolled more than
                                10,000 study participants in more than 20
                                chronic disease areas. Our clinical research
                                programs generate accurate clinical and
                                molecular data from people with different
                                conditions and healthy participants. Using
                                artificial intelligence and machine learning we
                                gain a deeper insight into the root causes of
                                chronic diseases. The goals of VRI clinical
                                research programs are to develop:
                            </h3>
                            <ul>
                                <li>
                                    Better diagnostic tests that can identify
                                    early signs and symptoms of diseases, so we
                                    can prevent the disease, instead of managing
                                    the symptoms.
                                </li>
                                <li>Find new molecular markers of disease.</li>
                                <li>
                                    Better companion diagnostic tests, which
                                    will help identify the best choice of
                                    therapy.
                                </li>
                                <li>
                                    Precision nutritional therapies that include
                                    diet and supplements and are solely based on
                                    the high-resolution data obtained from each
                                    person, and not generic recommendations for
                                    everyone.
                                </li>
                            </ul>
                            <h2
                                className={styles['vri--studies__header']}
                                id="active-studies"
                            >
                                Active Studies
                            </h2>
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <a
                                        href="https://forms.gle/bfK4n3pZTNRt8XDP9"
                                        target="_blank"
                                        rel="noopener external noreferrer"
                                    >
                                        <div
                                            className={classNames(
                                                'vri__button',
                                                styles.vri__button,
                                            )}
                                        >
                                            <p>JOIN THE STUDY</p>
                                        </div>
                                    </a>
                                    <h6>
                                        V-150 Study: Role of the gut microbiome
                                        in Ankylosing Spondylitis (AS / AxSpA)
                                    </h6>
                                </div>
                                <p>
                                    Despite great strides in Medicine, we still
                                    do not understand what causes flares in
                                    patients with Ankylosing Spondylitis (AS),
                                    also known as Axial Spondyloarthropathy
                                    (AxSpA). Therefore, the only therapies
                                    available today are meant to slow down the
                                    disease, not stop it or help patients heal.
                                    Research has shown that our genetics does
                                    not define whether we are in remission or
                                    having a flare. Instead, studies have shown
                                    that our environment may play a stronger
                                    role, including evidence that specific
                                    combinations of food and gut microorganisms
                                    may contribute to the disease and its
                                    flares. The goal of this study is to better
                                    understand the root causes of AS flares.
                                </p>
                            </div>
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <h6>
                                        V-118/V112 Study: Understanding
                                        gut-brain interactions
                                    </h6>
                                </div>
                                <p>
                                    The gut microbiome has been associated with
                                    cognition as well as many different
                                    neurological diseases and disorders. This
                                    study will seek to better understand the
                                    connection between the gut and the brain
                                    (the gut-brain axis). This study is
                                    currently only available to Viome customers.
                                </p>
                            </div>
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <h6>
                                        V-136 study: Understanding the role of
                                        the microbiome in the prediction of
                                        diabetes and people&apos;s risk of
                                        developing diabetes.
                                    </h6>
                                </div>
                                <p>
                                    The goal of this study is to determine if
                                    the microbiome can be predictive of an
                                    individual’s risk to developing Type II
                                    Diabetes. This study is currently only
                                    available to Viome customers.
                                </p>
                            </div>{' '}
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <h6>
                                        V-146 Study: Understanding the role of
                                        the microbiome in autoimmune diseases
                                    </h6>
                                </div>
                                <p>
                                    The goal of this study is to better
                                    understand the role of the microbiome in
                                    autoimmune disease progression and the
                                    molecular features that may contribute to
                                    disease relapse (flares) and to determine if
                                    there are specific microbes found in the
                                    microbiome that may contribute to disease
                                    activity. This study is currently only
                                    available to Viome customers.
                                </p>
                            </div>{' '}
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <h6>
                                        V-174 Study: A study of vaginal
                                        microbiome compositions and functions
                                    </h6>
                                </div>
                                <p>
                                    Viome is developing a novel vaginal
                                    microbiome test. To better understand what
                                    microorganisms are present in vaginal
                                    samples, and what they are doing we have
                                    launched a study seeking to investigate the
                                    vaginal microbiome in a large and diverse
                                    population.
                                </p>
                            </div>{' '}
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <h6>
                                        V-179 study: Understanding adherence to
                                        Viome’s personalized nutrition program
                                        and improvements in general wellness.
                                    </h6>
                                </div>
                                <p>
                                    The goal of this study is to understand how
                                    well customers follow their results and
                                    recommendations (R&amp;R) to define an
                                    adherence score and to determine how
                                    adherence to Viome R&amp;R improves general
                                    well-being. This study is currently only
                                    available to Viome customers.
                                </p>
                            </div>{' '}
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <h6>
                                        V-202.3 Covid-19 Wellness Survey:
                                        Understand the role of the microbiome in
                                        health and wellness during the
                                        SARS-CoV-2 outbreak.
                                    </h6>
                                </div>
                                <p>
                                    The goal of this study is to determine the
                                    effects of SARS-CoV-2, the virus that causes
                                    COVID-19, on general health and wellness.
                                    This brief survey asks questions about ones’
                                    general health, symptoms one may have
                                    experienced, and nutritional habits.
                                </p>
                            </div>
                            <h2
                                className={classNames(
                                    styles['vri--studies__header'],
                                    styles['vri--studies__header--completed'],
                                )}
                                id="completed-studies"
                            >
                                Completed Studies
                            </h2>
                            <div className={styles['vri__studies-module']}>
                                <div
                                    className={
                                        styles['vri__studies-module__wrapper']
                                    }
                                >
                                    <h6>
                                        V-109 Study: Predicting the glycemic
                                        response to food using the Viome Gut
                                        Intelligence test
                                    </h6>
                                </div>
                                <p>
                                    The purpose of the study is to collect and
                                    analyze physiological, physical, and
                                    molecular data from a diverse population to
                                    increase our understanding of how such
                                    parameters are associated with postprandial
                                    glycemic response.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </VRIShell>
        </>
    );
}
