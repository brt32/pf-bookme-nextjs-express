import Head from "next/head";
import Image from "next/image";
import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
