import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Header from "components/services/Header";
import ServicesList from "components/services/ServicesList";
import coding_img from 'assets/img/services/coding.png';
import { useEffect } from "react";
import {Helmet} from "react-helmet-async";



    const software_posts = [
        {
          title: 'Boost your conversion rate',
          img: coding_img,
          href: '#',
          category: { name: 'Article', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '6 min',
          author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          title: 'How to use search engine optimization to drive sales',
          img: coding_img,
          href: '#',
          category: { name: 'Video', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '4 min',
          author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          title: 'Improve your customer experience',
          img: coding_img,
          href: '#',
          category: { name: 'Case Study', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
      ]

      const desing_posts = [
        {
          title: 'Boost your conversion rate',
          img: coding_img,
          href: '#',
          category: { name: 'Article', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '6 min',
          author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          title: 'How to use search engine optimization to drive sales',
          img: coding_img,
          href: '#',
          category: { name: 'Video', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '4 min',
          author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          title: 'Improve your customer experience',
          img: coding_img,
          href: '#',
          category: { name: 'Case Study', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
      ]

    function Services() {
        useEffect(() => {
            window.scrollTo(0, 0);
        },[])


    return (
        <Layout>
        <Helmet>
      <title>M41k80 | Services</title>
      <meta name="description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="keywords" content='agencia de software, software agency, web development, creacion de pagina web' />
      <meta name="robots" content="all" />
      <link rel="canonical" href="" />
      <meta name="author" content="M41k80" />
      <meta name='publisher' content='M41k80' />

       {/* social media tags */}
      <meta property="og:title" content="M41k80 | Software Agency" />
      <meta property="og:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="M41k80 | Software Agency" />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@m41k80" />
      <meta name="twitter:creator" content="@m41k80" />
      <meta name="twitter:title" content="M41k80 | Software Agency" />
      <meta name="twitter:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
    </Helmet>
            <Navbar />
            <div className="pt-28">
                <Header />
                <div className="py-12 bg-gray-50">

                </div>
                <ServicesList posts={software_posts} title_section={'Software and Product Development Services'} />
                <ServicesList posts={desing_posts} title_section={'Desing Services'} />
                
           </div>
            <Footer />
        </Layout>
    )
}
export default Services;