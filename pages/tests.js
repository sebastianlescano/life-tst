import Head from 'next/head';
import classNames from 'classnames';
import VRIShell from '../components/VRIShell/VRIShell';
import styles from '../styles/Tests.module.scss';

export default function Tests() {
    return (
        <>
            <Head>
                <title>Viome Life Sciences - Tests | Viome</title>
                <meta
                    name="description"
                    content="Viome Life Sciences' tests are used as part of the direct-to-consumer service, but are also research tools, providing accurate data relevant to human health and chronic diseases."
                />
                <meta name="keywords" content="gut microbiome testing" />
                <meta
                    property="og:url"
                    content="http://www.viomelifesciences.com/tests"
                />
                <meta
                    property="og:title"
                    content="Viome Life Sciences - Tests"
                />
                <meta
                    property="og:description"
                    content="Viome Life Sciences' tests are used as part of the direct-to-consumer service, but are also research tools, providing accurate data relevant to human health and chronic diseases."
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="title" content="Viome Life Sciences - Tests" />
                <link
                    rel="canonical"
                    href="http://www.viomelifesciences.com/tests"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/tests"
                    hrefLang="en-us"
                />
                <link
                    rel="alternate"
                    href="http://www.viomelifesciences.com/tests"
                    hrefLang="x-default"
                />
            </Head>
            <VRIShell>
                <section className={styles.vri__hero}>
                    <h1>Tests</h1>
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
                                            href="#section-1"
                                            data-anchor="section-1"
                                            className=""
                                        >
                                            Why is studying RNA more powerful
                                            than DNA?
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-2"
                                            data-anchor="section-2"
                                            className=""
                                        >
                                            Main features/advantages of VLS
                                            tests
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-3"
                                            data-anchor="section-3"
                                            className=""
                                        >
                                            Gut Intelligence (GI) test
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-4"
                                            data-anchor="section-4"
                                            className=""
                                        >
                                            Human Gene Expression (HGE) test
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-5"
                                            data-anchor="section-5"
                                            className=""
                                        >
                                            Saliva Intelligence (SI) test
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-6"
                                            data-anchor="section-6"
                                            className=""
                                        >
                                            Vaginal Intelligence (VI) test
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-7"
                                            data-anchor="section-7"
                                            className=""
                                        >
                                            Plasma Intelligence (PI) test
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-8"
                                            data-anchor="section-8"
                                            className=""
                                        >
                                            FAQs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section-9"
                                            data-anchor="section-9"
                                        >
                                            References
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles['vri__columns--right']}>
                        <div className={styles['vri--tests__body']}>
                            <section id="lead-1">
                                <div className={styles['vri--tests__lead']}>
                                    <p>
                                        Our tests are used by Viome as part of
                                        the direct-to-consumer service, but are
                                        also excellent research tools, providing
                                        accurate and high-content data relevant
                                        to human health and chronic diseases.
                                        All tests use RNA sequencing, also known
                                        as (meta)transcriptomic methods.
                                    </p>
                                </div>
                            </section>
                            <section id="section-1">
                                <div>
                                    <h2>
                                        Why is studying RNA more powerful than
                                        DNA?
                                    </h2>

                                    <p>
                                        In the context of chronic diseases, RNA
                                        sequencing has major advantages over DNA
                                        sequencing, for both humans and our
                                        microbial symbionts. RNA (gene
                                        expression) is an extremely useful
                                        resource for studying health and
                                        disease, as gene expression is
                                        constantly changing throughout the
                                        course of a disease. DNA on the other
                                        hand, does not incur change and has been
                                        shown only to have a weak contribution
                                        to chronic diseases. For example, just
                                        think of a chronic disease such as IBD
                                        that goes through remission-relapse
                                        phases. The DNA will remain the same
                                        regardless of which disease phase you
                                        are in; however, the RNA will change to
                                        reflect the different disease phases.
                                        Very importantly, these changes in gene
                                        expression can be modulated, either via
                                        nutrition or microbiome functions.
                                    </p>
                                </div>
                            </section>

                            <section id="section-2">
                                <div>
                                    <h2>
                                        Main features/advantages of VLS tests
                                    </h2>

                                    <ul>
                                        <li>
                                            They identify and quantify all
                                            microorganisms, including RNA
                                            viruses (human, plant, and phages).
                                            No other taxonomic classification
                                            method is all-inclusive.
                                        </li>
                                        <li>
                                            All metatranscriptomic tests
                                            identify and quantify only the
                                            living microorganisms, because RNA
                                            from dead microorganisms quickly
                                            degrades. In contrast, microbial DNA
                                            remains in the sample long after a
                                            microorganism dies and can cause
                                            false positive calls.
                                        </li>
                                        <li>
                                            They quantify the expression of all
                                            genes present in the sample, human
                                            and/or microbial.
                                        </li>
                                        <li>
                                            Laboratory methods are automated,
                                            minimizing or eliminating batch
                                            effects. Our tests are performed in
                                            a CLIA-licensed lab, and most of
                                            them are clinically validated. This
                                            means that:
                                        </li>
                                        <ul>
                                            <li>
                                                All lab technicians have a B.S.
                                                in laboratory sciences
                                            </li>
                                            <li>
                                                All lab technicians are trained
                                                and competency tested
                                            </li>
                                            <li>
                                                Every step of every method
                                                follows SOPs that are validated
                                                and approved by the Lab Director
                                            </li>
                                            <li>
                                                All reagents and every lot must
                                                pass strict quality control
                                                standards
                                            </li>
                                            <li>
                                                Every instrument must have
                                                documented satisfactory
                                                performance
                                            </li>
                                            <li>
                                                Labs are
                                                environmentally-controlled and
                                                monitored
                                            </li>
                                            <li>
                                                Every sample and every batch of
                                                96 samples have quality control
                                                acceptance criteria that must
                                                pass. These include positive and
                                                negative process controls, etc.
                                            </li>
                                        </ul>
                                        <li>
                                            All tests, except for serum/plasma
                                            analysis, utilize at-home sample
                                            collection. Even our whole blood
                                            transcriptome test requires just 50
                                            microliters of finger prick blood.
                                        </li>
                                        <li>
                                            All samples can be shipped at
                                            ambient temperature globally. No
                                            refrigeration, freezing, or rapid
                                            and expensive shipping are needed.
                                        </li>
                                        <li>
                                            Metatranscriptomic data are relevant
                                            to chronic diseases and actionable.
                                            That means we can develop better
                                            diagnostic tests and implement
                                            nutritional/lifestyle strategies
                                            that can modulate human gene
                                            expression and prevent/cure chronic
                                            illness.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="section-3">
                                <div>
                                    <h2>Gut Intelligence (GI) test</h2>

                                    <p>
                                        <em>Gut Intelligence (GI) test</em> is a
                                        metatranscriptomic (RNA sequencing)
                                        stool test that identifies and
                                        quantifies all living microorganisms in
                                        the sample down to 1 part per million.
                                        This includes RNA viruses (human, plant,
                                        and phages).
                                    </p>
                                    <p />
                                    <ul>
                                        <li>
                                            Includes a collection kit with
                                            instructions, all necessary
                                            components, and a pre-paid return
                                            mailer
                                        </li>
                                        <li>
                                            Can be collected anywhere and
                                            shipped at ambient temperature
                                        </li>
                                        <li>
                                            Isolates total RNA from stool (DNA
                                            is degraded)
                                        </li>
                                        <li>
                                            Physically removes microbial rRNAs
                                            from total RNA
                                        </li>
                                        <li>
                                            All remaining RNAs are sequenced
                                            using full-length transcripts and a
                                            directional library preparation
                                            method
                                        </li>
                                        <li>
                                            Produces quantitative strain-,
                                            species-, and genus-level taxonomic
                                            classification data (average number
                                            of species per stool sample is 338)
                                        </li>
                                        <li>
                                            Produces quantitative microbial gene
                                            expression data that are clustered
                                            into KEGG orthologies (KOs). This is
                                            very different from metagenomic
                                            functional outputs, which can only
                                            tell you about the functional
                                            potential. The GI test measures the
                                            actual microbial functions. A
                                            typical gut microbiome has &gt;1
                                            million genes, but only 50,000 are
                                            expressed at a level of 1 part per
                                            million or above.
                                        </li>
                                        <li>
                                            A peer-reviewed article on this test
                                            is at{' '}
                                            <a
                                                href="https://www.hindawi.com/journals/ijg/2019/1718741/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                www.hindawi.com
                                            </a>
                                        </li>
                                    </ul>
                                    <p>
                                        GI test data provided by VLS to the
                                        grantee:
                                    </p>
                                    <ul>
                                        <li>
                                            List of genera and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of species and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of strains and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of KOs and their relative
                                            activity
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="section-4">
                                <div>
                                    <h2>Human Gene Expression (HGE) test</h2>

                                    <p>
                                        <em>
                                            Human Gene Expression (HGE) test
                                        </em>{' '}
                                        is a transcriptomic (RNA sequencing)
                                        blood test that:
                                    </p>
                                    <ul>
                                        <li>
                                            Includes a collection kit with
                                            instructions, all necessary
                                            components, and a pre-paid return
                                            mailer
                                        </li>
                                        <li>
                                            Requires 50 microliters of blood
                                            from a finger prick
                                        </li>
                                        <li>
                                            Can be collected anywhere and
                                            shipped at ambient temperature
                                        </li>
                                        <li>
                                            Isolates total RNA from blood (DNA
                                            is degraded)
                                        </li>
                                        <li>
                                            Physically selects polyadenylated
                                            (protein-coding) RNAs
                                        </li>
                                        <li>
                                            Sequences the remaining
                                            (polyadenylated) RNAs using a
                                            full-length transcript, directional
                                            method
                                        </li>
                                        <li>
                                            Produces quantitative gene
                                            expression data for human genes
                                            (average is ~14,000 per sample)
                                        </li>
                                        <li>
                                            A pre-print of our article
                                            describing this test is at{' '}
                                            <a
                                                href="https://doi.org/10.1101/2020.05.22.110080"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                doi.org
                                            </a>
                                        </li>
                                    </ul>

                                    <p>
                                        HGE test data provided by VLS to the
                                        grantee:
                                    </p>
                                    <ul>
                                        <li>
                                            List of human genes and their gene
                                            expression level (can be counts per
                                            million or transcripts per million)
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="section-5">
                                <div>
                                    <h2>Saliva Intelligence (SI) test</h2>

                                    <p>
                                        <em>Saliva Intelligence (SI) test</em>{' '}
                                        is a metatranscriptomic (RNA sequencing)
                                        saliva test that identifies and
                                        quantifies all living microorganisms in
                                        the sample down to 1 part per million.
                                        This includes RNA viruses (human, plant,
                                        and phages).
                                    </p>
                                    <ul>
                                        <li>
                                            Includes a collection kit with
                                            instructions, all necessary
                                            components, and pre-paid return
                                            mailer
                                        </li>
                                        <li>
                                            Can be collected anywhere and
                                            shipped at ambient temperature
                                        </li>
                                        <li>
                                            Isolates total RNA from saliva (DNA
                                            is degraded)
                                        </li>
                                        <li>
                                            Physically removes microbial and
                                            human rRNAs from total RNA
                                        </li>
                                        <li>
                                            Sequences all remaining RNAs using a
                                            full-length transcript, directional
                                            method
                                        </li>
                                        <li>
                                            Produces quantitative strain-,
                                            species-, and genus-level taxonomic
                                            classification data
                                        </li>
                                        <li>
                                            Produces quantitative microbial gene
                                            expression data that are clustered
                                            into KEGG orthologies (KOs). This is
                                            very different from metagenomic
                                            functional outputs, which can only
                                            tell you about the functional
                                            potential.{' '}
                                        </li>
                                    </ul>

                                    <p>Data provided by VLS to the grantee:</p>
                                    <ul>
                                        <li>
                                            List of genera and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of species and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of strains and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of KOs and their relative
                                            activity
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="section-6">
                                <div>
                                    <h2>Vaginal Intelligence (VI) test</h2>

                                    <p>
                                        <em>Vaginal Intelligence (VI) test</em>{' '}
                                        is a metatranscriptomic (RNA sequencing)
                                        vaginal test that identifies and
                                        quantifies all living microorganisms in
                                        the sample down to 1 part per million.
                                        This includes RNA viruses (human, plant,
                                        and phages).
                                    </p>
                                    <ul>
                                        <li>
                                            Includes a collection kit with
                                            instructions, all necessary
                                            components, and pre-paid return
                                            mailer
                                        </li>
                                        <li>
                                            Can be collected anywhere and
                                            shipped at ambient temperature
                                        </li>
                                        <li>
                                            Isolates total RNA from vaginal
                                            samples (DNA is degraded)
                                        </li>
                                        <li>
                                            Physically removes microbial and
                                            human rRNAs from total RNA
                                        </li>
                                        <li>
                                            Sequences all remaining RNAs using a
                                            full-length transcript, directional
                                            method
                                        </li>
                                        <li>
                                            Produces quantitative strain-,
                                            species-, and genus-level taxonomic
                                            classification data
                                        </li>
                                        <li>
                                            Produces quantitative microbial gene
                                            expression data that are clustered
                                            into KEGG orthologies (KOs). This is
                                            very different from metagenomic
                                            functional outputs, which can only
                                            tell you about the functional
                                            potential. The GI test measures the
                                            actual microbial functions.
                                        </li>
                                    </ul>

                                    <p>Data provided by VLS to the grantee:</p>
                                    <ul>
                                        <li>
                                            List of genera and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of species and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of strains and their relative
                                            activity
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="section-7">
                                <div>
                                    <h2>Plasma Intelligence (PI) test</h2>

                                    <p>
                                        Plasma Intelligence (PI) test is a
                                        metatranscriptomic (RNA sequencing)
                                        plasma or serum test that identifies and
                                        quantifies all living microorganisms in
                                        the sample. This includes RNA viruses
                                        (human, plant, and phages). The test can
                                        also identify cell-free RNAs.
                                    </p>
                                    <ul>
                                        <li>
                                            The samples for this test must be
                                            collected by a phlebotomist, as it
                                            requires a venous blood draw and
                                            centrifugation
                                        </li>
                                        <li>
                                            The phlebotomist must be trained to:
                                        </li>
                                        <ul>
                                            <li>
                                                Use the VLS’ skin prep kit for
                                                the removal of skin contaminants
                                            </li>
                                            <li>
                                                Properly generate and transfer
                                                plasma/serum into VLS’ sample
                                                preservation kit
                                            </li>
                                            <li>
                                                Properly package the sample and
                                                ship at ambient temperature in a
                                                timely fashion
                                            </li>
                                        </ul>
                                        <li>
                                            Includes all instructions, necessary
                                            components, and pre-paid return
                                            mailer
                                        </li>
                                        <li>
                                            Isolates total RNA from plasma or
                                            serum (DNA is degraded)
                                        </li>
                                        <li>
                                            Physically removes microbial and
                                            human rRNAs from total RNA
                                        </li>
                                        <li>
                                            Sequences all remaining RNAs using a
                                            full-length transcript, directional
                                            method
                                        </li>
                                        <li>
                                            Produces quantitative strain-,
                                            species-, and genus-level taxonomic
                                            classification data
                                        </li>
                                        <li>
                                            Produces quantitative microbial gene
                                            expression data that are clustered
                                            into KEGG orthologies (KOs). This is
                                            very different from metagenomic
                                            functional outputs, which can only
                                            tell you about the functional
                                            potential. The GI test measures the
                                            actual microbial functions.
                                        </li>
                                    </ul>

                                    <p>Data provided by VLS to the grantee:</p>
                                    <ul>
                                        <li>
                                            List of genera and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of species and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of strains and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of KOs and their relative
                                            activity
                                        </li>
                                        <li>
                                            List of human genes and their gene
                                            expression level (can be counts per
                                            million or transcripts per million)
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="section-8">
                                <div>
                                    <h2>FAQs</h2>

                                    <h3>
                                        A lab claims they sequence 16S rRNA. How
                                        is that different from VLS’ RNA
                                        sequencing?
                                    </h3>
                                    <p>
                                        The term “16S rRNA sequencing” is
                                        inaccurate, because the method does not
                                        sequence RNA. People use this term
                                        either because they aren&apos;t familiar
                                        with its meaning, or they are
                                        misrepresenting their technology. The
                                        correct term is “16S rRNA gene
                                        sequencing”, and it refers to PCR
                                        amplification of a portion of the
                                        bacterial and archaeal 16S gene (DNA),
                                        then sequencing it. This method suffers
                                        from poor coverage (it misses many
                                        bacteria, most archaea, and all fungi
                                        and viruses), poor resolution (genus
                                        level at best: Knight, R., et al.,
                                        Nature Reviews Microbiology, 2018,
                                        410–422), and many false positive calls
                                        (PeerJ. 2018; 6: e4652). These drawbacks
                                        can lead to false discovery, lack of
                                        discovery, or non-actionable
                                        information, since genera contain many
                                        species and many more strains with very
                                        different functions, some beneficial and
                                        other detrimental.
                                    </p>
                                    <h3>
                                        How is it possible to preserve RNA at
                                        ambient temperatures for weeks?
                                    </h3>
                                    <p>
                                        While RNA is inherently unstable and
                                        RNases are ubiquitous, Viome’s RNA
                                        stabilizer (RPB) eliminates all these
                                        factors by denaturing enzymes and
                                        preventing RNA self cleavage. By
                                        exposing a sample to RPB preserves the
                                        dynamic equilibrium of RNA molecules in
                                        a sample at the time of collection. RNA
                                        stability has been validated for up to
                                        28 days at ambient temperatures and 90
                                        days at 4C.
                                    </p>
                                </div>
                            </section>

                            <section id="section-9">
                                <div>
                                    <h2>References</h2>

                                    <p>
                                        Hatch, A., et al. A Robust
                                        Metatranscriptomic Technology for
                                        Population-Scale Studies of Diet, Gut
                                        Microbiome, and Human Health, Int. J.
                                        Gen. Volume 2019 |Article ID 1718741
                                    </p>
                                    <p>
                                        Toma, R., et al. A clinically validated
                                        human capillary blood transcriptome test
                                        for global systems biology studies,
                                        BioTechniques 2020, Vol. 69, No. 4
                                    </p>
                                    <p>
                                        Banavar, G., et al. The salivary
                                        metatranscriptome as an accurate
                                        diagnostic indicator of oral cancer,
                                        Genomic Medicine, 2020, accepted for
                                        publication.
                                    </p>
                                    <p>
                                        Leek, J., Scharpf, R., Bravo, H.,
                                        Simcha, D., Langmead, B., Johnson, W.,
                                        Geman, D., Baggerly, K., Irizarry, R.
                                        (2010). Tackling the widespread and
                                        critical impact of batch effects in
                                        high-throughput data Nature Reviews
                                        Genetics 11(10), 733-739.{' '}
                                        <a
                                            href="https://dx.doi.org/10.1038/nrg2825"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            https://dx.doi.org/10.1038/nrg2825
                                        </a>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </VRIShell>
        </>
    );
}
