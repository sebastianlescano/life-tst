import Head from 'next/head';
import classNames from 'classnames';
import VRIShell from '../components/VRIShell/VRIShell';
import styles from '../styles/DataAccess.module.scss';

export default function DataAccess() {
    return (
        <>
            <Head>
                <title>Viome Life Sciences - Request Data Access | Viome</title>
                <meta
                    name="description"
                    content="Request to access Viome research data"
                />
                <meta name="keywords" content="gut microbiome testing" />
                <meta
                    property="og:url"
                    content="http://www.viomelifesciences.com/data-access"
                />
                <meta
                    property="og:title"
                    content="Viome Life Sciences - Request Data Access"
                />
                <meta
                    property="og:description"
                    content="Request to access Viome research data"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="title"
                    content="Viome Life Sciences - Request Data Access"
                />
                <link
                    rel="canonical"
                    href="http://www.viomelifesciences.com/data-access"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/data-access"
                    hrefLang="en-us"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/data-access"
                    hrefLang="x-default"
                />
            </Head>
            <VRIShell>
                <section className={styles.vri__hero}>
                    <h1>Viome Publication Dataset Access Program</h1>
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
                                            href="#submit_request"
                                            data-anchor="submit_request"
                                        >
                                            How to Submit a Request
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#faqs" data-anchor="faqs">
                                            FAQs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles['vri__columns--right']}>
                        <div className={styles.vri__body}>
                            <h3>
                                Viome is committed to supporting scientific
                                research by enabling access to data we have
                                included in our publications. We provide access
                                to full summary statistics through a Data
                                Transfer Agreement that protects the privacy of
                                our participant&apos;s data.
                            </h3>
                            <h2
                                className="vri--studies__header"
                                id="submit_request"
                            >
                                How to Submit a Request
                            </h2>
                            <h4>Non-Profit Institutions</h4>
                            <p>
                                If you are a non-profit institution, please
                                submit your data request for review by
                                completing the{' '}
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfeWU4T3bAUmYD44-1H3q0vfOdl5aj4iFvDsBwOnQ2PMh2TZQ/viewform?usp=sf_link"
                                    target="_external"
                                >
                                    Viome Publication Dataset Access Request
                                    Form
                                </a>
                                . The information you provide on this form will
                                be used to generate a Statement of Work (no fee
                                SOW) and a Data Transfer Agreement (DTA) that
                                will allow Viome to transfer data to you for use
                                in the research project you describe. The DTA
                                protects the privacy of our participants’ data,
                                and the SOW outlines how you plan to use the
                                summary statistics.
                            </p>
                            <p>
                                The SOW and DTA will need to be signed by your
                                institution first, and then Viome before data
                                can be shared. If you are collaborating with
                                investigators at multiple institutions and those
                                institutions must also receive copies of Viome
                                summary statistics, please have a PI from each
                                institution fill out the form to ensure all
                                parties receive access to datasets within a
                                similar timeframe.
                            </p>
                            <p>
                                Please note, each signed SOW and DTA allows use
                                of Viome data only by the signatory institution
                                and its personnel. Each institution that wishes
                                to access or use Viome data must have a signed
                                SOW and DTA covering their access to Viome data.
                            </p>
                            <h4>Commercial Institutions</h4>
                            <p>
                                If you are a commercial institution interested
                                in receiving Viome summary statistics, please
                                reach out directly to{' '}
                                <a href="mailto:bd@viome.com">bd@viome.com</a>{' '}
                                to receive more information.
                            </p>
                            <a
                                id="data-access-button"
                                target="_external"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfeWU4T3bAUmYD44-1H3q0vfOdl5aj4iFvDsBwOnQ2PMh2TZQ/viewform?usp=sf_link"
                                style={{
                                    borderColor: 'transparent',
                                    color: '#fff',
                                    margin: '2.5em 0',
                                    padding: '0 15px',
                                    minWidth: '175px',
                                    maxWidth: '100%',
                                    height: '45px',
                                    border: '2px solid transparent',
                                    borderRadius: '100px',
                                    background: '#5853a2',
                                    verticalAlign: 'middle',
                                    textAlign: 'center',
                                    textDecoration: 'none !important',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                    lineHeight: '41px',
                                    transition: 'all .15s',
                                    boxSizing: 'border-box',
                                    display: 'block',
                                }}
                            >
                                Dataset Access Request Form
                            </a>
                            <h4>Additional Requirements</h4>
                            <ul>
                                <li>
                                    Viome data cannot be distributed, publicly
                                    displayed, shared, or sold to third parties.
                                </li>
                                <li>
                                    Researchers using Viome data must agree that
                                    the results of their research will be
                                    published in open-access scientific journals
                                    (or open-access articles) and according to
                                    Viome’s publication best practices.
                                </li>
                                <li>
                                    Viome’s Publication Best Practices:
                                    <ul>
                                        <li>
                                            Identify the appropriate journal for
                                            the scientific topic
                                        </li>
                                        <li>
                                            Ensure complete and accurate
                                            reporting
                                        </li>
                                        <li>
                                            Manage research data effectively,
                                            responsibly, and transparently
                                        </li>
                                        <li>Give appropriate attribution</li>
                                        <li>
                                            Observe ethical aspects of
                                            publishing de-identified information
                                        </li>
                                        <li>
                                            Understand and comply with relevant
                                            regulations governing research
                                        </li>
                                        <li>Practice collaborative writing</li>
                                        <li>Identify your target audience</li>
                                        <li>Develop a compelling storyline</li>
                                        <li>
                                            Develop tables and figures that
                                            highlight key findings
                                        </li>
                                        <li>Apply clear writing principles</li>
                                    </ul>
                                </li>
                                <li>
                                    Researchers shall not file for intellectual
                                    property rights covering the results of
                                    research using Viome data.
                                </li>
                                <li>
                                    If researchers request 3 or more datasets,
                                    the Viome Studies team may reach out to them
                                    for additional information.
                                </li>
                            </ul>
                            <h4>RESTRICTIONS</h4>
                            <p>
                                Any other restrictions/limitations (e.g. IRB
                                approval required; available to the larger
                                scientific community, etc.){' '}
                            </p>
                            <h4>CRITERIA</h4>
                            <p>
                                Viome Publication Dataset Access Requests are
                                granted or denied on a case by case basis at the
                                discretion of Viome Research Institute based on
                                Viome’s scientific and IP Strategic alignment
                                and other criteria.
                            </p>

                            <h2 className="vri--studies__header" id="faqs">
                                Frequently Asked Questions
                            </h2>
                            <h3>Request Process</h3>
                            <h4 className={styles.faquestion}>
                                How long does it take Viome to process my
                                request?
                            </h4>
                            <p>
                                Once Viome has received a complete and correct
                                request form, we can generate a template
                                agreement and SOW within 10 business days. Once
                                Viome receives the DTA and/or SOW signed by your
                                institution, it takes approximately 4 weeks for
                                Viome to review and sign these documents.
                            </p>
                            <h4 className={styles.faquestion}>
                                How can I check the status of my request?
                            </h4>
                            <p>
                                If more than 5 business days have passed since
                                you completed the request form and a member of
                                our team has not contacted you, you may follow
                                up by emailing{' '}
                                <a href="mailto:dataset-request@viome.com">
                                    dataset-request@viome.com
                                </a>
                                . If 4 weeks have passed since you or your
                                institution contracts office has shared a
                                partially signed DTA and/or SOW with us and we
                                have not returned the fully signed version, you
                                may follow up by emailing
                                dataset-request@viome.com
                            </p>
                            <h4 className={styles.faquestion}>
                                Who can I contact with more questions?
                            </h4>
                            <p>
                                If you have additional questions or concerns,
                                please contact dataset-request@viome.com with
                                the subject line “Question about Publication
                                Dataset Access”. A member of the research team
                                will get back to you within 5 business days.
                            </p>
                            <h3>Legal</h3>
                            <h4 className={styles.faquestion}>
                                How can I access the required legal documents?
                            </h4>
                            <p>
                                After reviewing your request, a member of the
                                VRI Team will use the information provided via
                                the Publication Dataset Access Request Form to
                                draft an SOW and DTA. Once ready for signature,
                                the DTA and SOW documents will be emailed to the
                                email address provided in your request.
                            </p>
                            <h4 className={styles.faquestion}>
                                Which legal documents are required, and who
                                needs to sign them?
                            </h4>

                            <p>
                                To access summary statistics, we require the PI
                                and an institution’s duly authorized signing
                                official to sign a Data Transfer Agreement (DTA)
                                and Statement of Work (SOW). After receiving
                                your form response, Viome will send the PI these
                                documents for partial execution. The DTA
                                protects the privacy of our participants’ data,
                                and the SOW outlines how you plan to use the
                                summary statistics.
                            </p>
                            <h3>Dataset Access &amp; Analysis</h3>
                            <h4 className={styles.faquestion}>
                                Which data can I access through this program?
                            </h4>
                            <p>
                                We provide access to de-identified summary
                                statistics from published Viome studies for use
                                in your research through a data transfer
                                agreement (DTA).
                            </p>
                            <h4 className={styles.faquestion}>
                                What are the criteria applicable to grant of the
                                request?
                            </h4>
                            <p>
                                Each request is carefully reviewed using a set
                                of criteria applied by Viome Research Institute.
                                A request can be granted or denied at Viome’s
                                discretion based on the scientific depth of the
                                proposed study, reputation of PI, alignment with
                                Viome’s scientific and IP strategy, among other
                                criteria.
                            </p>
                            <h4 className={styles.faquestion}>
                                Is there a fee for this request?
                            </h4>
                            <p>
                                No. This request generally does not involve any
                                fees. We will let you know ahead of time if
                                there could be any fees.
                            </p>
                            <h4 className={styles.faquestion}>
                                Who can access the data that Viome will share
                                with me?
                            </h4>
                            <p>
                                Only individuals listed in your request form and
                                who work at your institution may access the
                                summary statistics.
                            </p>
                            <h4 className={styles.faquestion}>
                                I’m collaborating with a PI at another
                                institution. Do they need to submit anything?
                            </h4>
                            <p>
                                Yes! If you are collaborating with investigators
                                at another institution who each will need to
                                access the summary statistics as part of this
                                research project, please inform those
                                investigators will need to fill out the
                                Publication Dataset Access Request Form, sign an
                                SOW, and sign a DTA with Viome.
                            </p>
                        </div>
                    </div>
                </section>
            </VRIShell>
        </>
    );
}
