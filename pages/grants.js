/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import VRIShell from '../components/VRIShell/VRIShell';
import styles from '../styles/Grants.module.scss';

export default function Grants() {
    useEffect(() => {
        const vriForm = document.querySelector('#vri-grants-form'),
            vriBtn = document.querySelector('.vri__button'),
            /*
            studyGroup = document.querySelectorAll(
                'input[name="entry.717625224"]',
            ),
            endpoints = document.querySelector('#endpoints'),
            */
            thankyou = document.querySelector('.vri__forms--thankyou'),
            /*
            ~ @params
            ~ form (element) - form we are submitting
            ~ @description
            ~ Serializes the given form element and submits it to Google forms.
            */
            sendData = (form) => {
                const formData = new FormData(form),
                    jQuery = window.jQuery || {};

                thankyou.classList.add(styles.active);
                // vriBtn.setAttribute('disabled', true);

                const formValues = {};
                formData.forEach((value, key) => {
                    // Reflect.has in favor of: object.hasOwnProperty(key)
                    if (!Reflect.has(formValues, key)) {
                        formValues[key] = value;
                        return;
                    }
                    if (!Array.isArray(formValues[key])) {
                        formValues[key] = [formValues[key]];
                    }
                    formValues[key].push(value);
                });

                jQuery.ajax({
                    type: 'POST',
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfB6yFg-JyBZfkdnphJErCmEhtKqtaRFSbjwLj3XlGVF3RfGQ/formResponse',
                    data: formValues,
                    contentType: 'application/json',
                    dataType: 'jsonp',
                    complete() {
                        window.scrollTo({
                            top: thankyou.offsetTop - window.innerHeight / 2,
                            behavior: 'smooth',
                        });
                    },
                });
            };

        // Check if we are in a submitted state or not
        vriBtn.addEventListener('click', () => {
            vriForm.classList.add(styles['vri__forms--submitted']);
        });

        // Overwrite default Form Action
        vriForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sendData(vriForm);
        });

        return () => {
            vriBtn.removeEventListener('click', () => {
                vriForm.classList.add(styles['vri__forms--submitted']);
            });

            vriForm.removeEventListener('submit', (e) => {
                e.preventDefault();
                sendData(vriForm);
            });
        };
    }, []);

    return (
        <>
            <Head>
                <title>Viome Life Sciences - Grants | Viome</title>
                <meta
                    name="description"
                    content="The mission of the VRI Grants Program is to translate research into commercial products with clinical utility: devising new therapies and developing more accurate diagnostics and companion diagnostics."
                />
                <meta name="keywords" content="gut microbiome testing" />
                <meta
                    property="og:url"
                    content="http://www.viomelifesciences.com/grants"
                />
                <meta
                    property="og:title"
                    content="Viome Life Sciences - Grants"
                />
                <meta
                    property="og:description"
                    content="The mission of the VRI Grants Program is to translate research into commercial products with clinical utility: devising new therapies and developing more accurate diagnostics and companion diagnostics."
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="title" content="Viome Life Sciences - Grants" />
                <link
                    rel="canonical"
                    href="http://www.viomelifesciences.com/grants"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/grants"
                    hrefLang="en-us"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/grants"
                    hrefLang="x-default"
                />
            </Head>
            <VRIShell>
                <section className={styles.vri__hero}>
                    <h1>Grants</h1>
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
                                            href="#program-mission"
                                            data-anchor="program-mission"
                                        >
                                            Program Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#program-discription"
                                            data-anchor="program-discription"
                                        >
                                            Program Description
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#program-process"
                                            data-anchor="program-process"
                                        >
                                            The process of obtaining a VRI grant
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#program-proposal"
                                            data-anchor="program-proposal"
                                        >
                                            Pre-proposal submission
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles['vri__columns--right']}>
                        <div className={styles.vri__body}>
                            <div
                                className={classNames(
                                    styles.vri__container,
                                    styles.vri__lead,
                                )}
                                id="program-mission"
                            >
                                <h2>Program Mission</h2>
                                <p>
                                    The mission of the VRI Grants Program is to
                                    translate research into commercial products
                                    with clinical utility: devising new
                                    therapies and developing more accurate
                                    diagnostics and companion diagnostics.
                                </p>
                            </div>
                            <div
                                className={styles.vri__container}
                                id="program-discription"
                            >
                                <h2>Program Description</h2>
                                <p>
                                    VRI systems biology platform has been built
                                    by hundreds of biochemists,
                                    bioinformaticians, mathematicians, data
                                    scientists, and software engineers over the
                                    last 10 years.
                                </p>
                                <p>
                                    We want the entire World to have free and
                                    unlimited access to this advanced platform,
                                    to accelerate discoveries of root causes of
                                    chronic diseases, cancers, and aging, and
                                    develop better preventative, curative, and
                                    diagnostic avenues.
                                </p>
                                <p>
                                    VRI offers in-kind grants to clinicians and
                                    researchers at any institution, anywhere in
                                    the World. A typical grant would include
                                    free:
                                </p>
                                <ul>
                                    <li>
                                        VRI sample collection kits (blood,
                                        stool, saliva, urine, plasma, CSF,
                                        throat swabs, vaginal swabs, surfaces,
                                        etc.). Most samples can be collected at
                                        home. All samples are shipped at room
                                        temperature and are exempt human
                                        specimens, since all pathogens are
                                        inactivated.
                                    </li>
                                    <li>
                                        VRI tests, which include laboratory and
                                        bioinformatics analyses (strain level
                                        taxonomy and quantitative gene
                                        expression)
                                    </li>
                                    <li>
                                        Advanced data science analyses (machine
                                        learning)
                                    </li>
                                    <li>
                                        State-of-the-art digital research
                                        platform for electronic recruitment and
                                        consent, collection of clinical data,
                                        delivering kits, etc.
                                    </li>
                                    <li>
                                        Federally-accredited IRB with authority
                                        to approve clinical research in the USA,
                                        but VRI can help with ethical review
                                        applications elsewhere
                                    </li>
                                </ul>
                                <br />
                                <p>
                                    An example of a successful grant: A VRI
                                    grantee collected saliva samples from oral
                                    cancer and cancer-free patients, and
                                    provided accurate phenotyping. VRI analyzed
                                    all the samples and developed a diagnostic
                                    test for oral cancer that has lead to a
                                    Genomic Medicine publication (see below) and
                                    is currently moving through regulatory
                                    approvals in USA and EU.
                                    <br />
                                    The applicant and their institution may
                                    collect royalties from the commercialization
                                    of the product. VRI Grants do not provide
                                    direct financial support. However, they
                                    include unlimited free VRI research support.
                                    If you would like to conduct a large
                                    clinical study with relevance to human
                                    health, you will need to include
                                    high-quality tests that may cost
                                    approximately $1000 each, which may limit
                                    the size of your study. With a VRI grant,
                                    you can include hundreds of participants and
                                    obtain clinical-grade data from multiple
                                    sites for free. For example, if VRI performs
                                    the stool, blood, and saliva tests on 300
                                    participants at two time points, that makes
                                    VRI’s grant value of $1,800,000 USD.
                                </p>
                            </div>
                            <div
                                className={styles.vri__container}
                                id="program-process"
                            >
                                <h2>The process of obtaining a VRI grant</h2>
                                <h3>Eligibility</h3>
                                <ul>
                                    <li>
                                        Any organization in the World,
                                        commercial, educational, non-profit,
                                        etc.
                                    </li>
                                    <li>
                                        You must have regulatory approvals to
                                        send human specimens to VRI laboratories
                                        in the USA.
                                    </li>
                                    <li>
                                        Only proposals to conduct research on
                                        human subjects will be considered.
                                        Animal or
                                        <em>&nbsp;in vitro</em> research will
                                        not be considered.
                                    </li>
                                    <li>
                                        Only proposals with a clear
                                        commercialization path will be
                                        considered.
                                    </li>
                                    <li>
                                        Only projects that include a large
                                        number (&gt;100) of study participants
                                        will be considered.
                                    </li>
                                </ul>

                                <br />

                                <h3>Application steps</h3>
                                <ul>
                                    <li>
                                        Submit the pre-proposal (the form is
                                        below).
                                    </li>
                                    <li>
                                        Our scientific team will review it and
                                        contact you if the proposal fits the
                                        VRI&apos;s mission.
                                    </li>
                                    <li>
                                        We will schedule a video teleconference
                                        for a more detailed discussion. more
                                        detailed discussion.
                                        <br />
                                        VRI will work with you to finalize the
                                        study protocol and any ethical reviews.
                                    </li>

                                    <li>
                                        We will create a partnership agreement
                                        between VRI and PI&apos;s institution
                                        (IP discussions, potential royalties).
                                        The grant is awarded and the project
                                        starts.
                                        <br />
                                    </li>
                                </ul>
                            </div>

                            <div
                                className={styles.vri__container}
                                id="program-proposal"
                            >
                                <h2>Pre-proposal submission</h2>
                                <p>
                                    If you have any questions before or after
                                    you apply, you can always email us at
                                    studies@viome.com
                                    <br />
                                </p>

                                <div
                                    className={classNames(
                                        'vri__forms--thankyou',
                                        styles['vri__forms--thankyou'],
                                    )}
                                >
                                    <h3>
                                        Thank you for submitting your
                                        pre-proposal.
                                    </h3>
                                    <p>
                                        You will be contacted within two weeks
                                        if you are considered for a full
                                        application.
                                    </p>
                                </div>

                                <form
                                    className={styles.vri__forms}
                                    id="vri-grants-form"
                                >
                                    <div className={styles['vri__forms--pair']}>
                                        <div
                                            className={
                                                styles['vri__forms--field']
                                            }
                                        >
                                            <label htmlFor="fname">
                                                <p>First Name</p>
                                                <br />
                                                <input
                                                    type="text"
                                                    id="fname"
                                                    name="entry.887097372"
                                                    required=""
                                                />
                                            </label>
                                        </div>
                                        <div
                                            className={
                                                styles['vri__forms--field']
                                            }
                                        >
                                            <label htmlFor="lname">
                                                <p>Last Name </p>
                                            </label>
                                            <input
                                                type="text"
                                                id="lname"
                                                name="entry.1354560237"
                                                required=""
                                            />
                                        </div>
                                    </div>

                                    <label htmlFor="institution">
                                        <p>Institution Name </p>
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="institution"
                                        name="entry.257955215"
                                        className={
                                            styles['vri__forms--field--full']
                                        }
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="email">
                                        <p>Email </p>
                                    </label>
                                    <br />
                                    <input
                                        type="email"
                                        id="email"
                                        name="entry.129183085"
                                        className={
                                            styles['vri__forms--field--full']
                                        }
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <div className={styles['vri__forms--pair']}>
                                        <div
                                            className={
                                                styles['vri__forms--field']
                                            }
                                        >
                                            <label htmlFor="number">
                                                <p>Phone Number</p>
                                            </label>
                                            <br />
                                            <input
                                                type="tel"
                                                id="number"
                                                name="entry.867698753"
                                                required=""
                                            />
                                            <br />
                                            <br />
                                        </div>
                                        <div
                                            className={
                                                styles['vri__forms--field']
                                            }
                                        >
                                            <label htmlFor="length">
                                                <p>Estimated length of study</p>
                                            </label>
                                            <br />
                                            <input
                                                type="text"
                                                id="length"
                                                name="entry.990639094"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className={styles['vri__forms--pair']}>
                                        <div
                                            className={
                                                styles['vri__forms--field']
                                            }
                                        >
                                            <label htmlFor="datestart">
                                                <p>Expected Start Date</p>
                                            </label>
                                            <br />
                                            <input
                                                type="date"
                                                id="datestart"
                                                name="entry.2032027504"
                                                required=""
                                            />
                                            <br />
                                            <br />
                                        </div>
                                        <div
                                            className={
                                                styles['vri__forms--field']
                                            }
                                        >
                                            <label htmlFor="dateend">
                                                <p>Expected End Date</p>
                                            </label>
                                            <br />
                                            <input
                                                type="date"
                                                id="dateend"
                                                name="entry.20634144"
                                                required=""
                                            />
                                            <br />
                                        </div>
                                    </div>
                                    <ul className={styles['vri__forms--radio']}>
                                        <li>
                                            <input
                                                type="radio"
                                                id="prospective-option"
                                                name="entry.1457373833"
                                                value="Prospective"
                                                required=""
                                            />
                                            <label htmlFor="prospective-option">
                                                <div className={styles.check} />
                                                <p>Prospective</p>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="retrospective-option"
                                                name="entry.1457373833"
                                                value="Retrospective"
                                                required=""
                                            />
                                            <label htmlFor="retrospective-option">
                                                <div className={styles.check} />
                                                <p>Retrospective</p>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="both-option-pr"
                                                name="entry.1457373833"
                                                value="Both"
                                                required=""
                                            />
                                            <label htmlFor="both-option-pr">
                                                <div className={styles.check} />
                                                <p>Both</p>
                                            </label>
                                        </li>
                                    </ul>

                                    <label htmlFor="participants">
                                        <p>Total number of participants</p>
                                    </label>
                                    <br />
                                    <input
                                        type="number"
                                        id="participants"
                                        name="entry.1018421273"
                                        required=""
                                    />
                                    <br />
                                    <label>
                                        <p>Study type</p>
                                    </label>
                                    <br />
                                    <ul className={styles['vri__forms--radio']}>
                                        <li>
                                            <input
                                                type="radio"
                                                id="observational-option"
                                                name="entry.717625224"
                                                value="Observational"
                                            />
                                            <label htmlFor="observational-option">
                                                <div className={styles.check} />
                                                <p>Observational</p>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="interventional-option"
                                                name="entry.717625224"
                                                value="Interventional"
                                                required=""
                                            />
                                            <label
                                                className={
                                                    styles[
                                                        'interventional-option'
                                                    ]
                                                }
                                                htmlFor="interventional-option"
                                            >
                                                <div className={styles.check} />
                                                <p>Interventional</p>
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="both-option"
                                                name="entry.717625224"
                                                value="Both"
                                                required=""
                                            />
                                            <label htmlFor="both-option">
                                                <div className={styles.check} />
                                                <p>Both</p>
                                            </label>
                                        </li>
                                    </ul>
                                    <label htmlFor="endpoints">
                                        <p>Endpoints (if interventional)</p>
                                    </label>
                                    <br />
                                    <textarea
                                        id="endpoints"
                                        name="entry.1824960999"
                                        rows="3"
                                        maxLength="1000"
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="molecular">
                                        What molecular data do you plan on
                                        collecting (excluding Viome tests)?
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="molecular"
                                        name="entry.103325149"
                                        className={
                                            styles['vri__forms--field--full']
                                        }
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="clinical">
                                        What clinical data do you plan on
                                        collecting?
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="clinical"
                                        name="entry.444587886"
                                        className={
                                            styles['vri__forms--field--full']
                                        }
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="dietary">
                                        What dietary data do you plan on
                                        collecting?
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="dietary"
                                        name="entry.720871352"
                                        className={
                                            styles['vri__forms--field--full']
                                        }
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="goals">
                                        <p>
                                            Study goals (develop a test, a
                                            therapy…) therapy…)
                                        </p>
                                    </label>
                                    <br />
                                    <textarea
                                        id="goals"
                                        name="entry.327052169"
                                        rows="3"
                                        maxLength="1000"
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="utility">
                                        The main purpose of VRI grants is to
                                        jointly develop IP that Viome will
                                        convert into a commercial product.
                                        Please describe how you envision
                                        commercializing the study outcome(s).
                                    </label>
                                    <br />
                                    <textarea
                                        id="utility"
                                        name="entry.549180195"
                                        rows="3"
                                        maxLength="1000"
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="description">
                                        <p>
                                            Study description (limit to 1000
                                            words) words)
                                        </p>
                                    </label>
                                    <br />
                                    <textarea
                                        id="description"
                                        name="entry.1378341124"
                                        rows="3"
                                        maxLength="1000"
                                        required=""
                                    />
                                    <br />
                                    <br />

                                    <input
                                        className={classNames(
                                            'vri__button',
                                            styles.vri__button,
                                        )}
                                        type="submit"
                                        value="Apply for VRI Grant"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </VRIShell>
        </>
    );
}
