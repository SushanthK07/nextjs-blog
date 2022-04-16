import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a Full Stack Dev with a year experience on developing MERN stack
          production ready web application for a startup called <b>needl.ai</b>{" "}
          based in Bengaluru, India
        </p>
        <code className={utilStyles.myCode}>
          Yes! 1 + 1 = 11, I love Javascript!
        </code>
        <p>
          Currently, I'm learning Next.js, a React framework for building web
          apps using this{" "}
          <a href="https://nextjs.org/learn">official tutorial docs</a>
        </p>
      </section>
    </Layout>
  );
}
