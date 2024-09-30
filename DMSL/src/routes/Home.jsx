import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroImg from '../components/HeroImg.jsx'
import Footer from '../components/Footer.jsx'
import '../routes/Home.css';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg>
      <div className="content">
        <h4>Hello Students</h4>
            <h2>Welcome to DMSL Virtual Lab</h2>
                <h5>Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on
                  data. A DBMS serves as an interface between an end-user and a database, allowing users to create,
                  read, update, and delete data in the database.

                  DBMS manage the data, the database engine, and the database schema, allowing for data to be
                  manipulated or extracted by users and other programs. This helps provide data security, data
                  integrity, concurrency, and uniform data administration procedures.

                  DBMS optimizes the organization of data by following a database schema design technique called
                  normalization, which splits a large table into smaller tables when any of its attributes have
                  redundancy in values. DBMS offer many benefits over traditional file systems, including flexibility
                  and a more complex backup system.

                  Database management systems can be classified based on a variety of criteria such as the data model,
                  the database distribution, or user numbers. The most widely used types of DBMS software are
                  relational, distributed, hierarchical, object-oriented, and network.</h5>
    </div>
      </HeroImg>
      <Footer></Footer>
    </div>
  )
}

export default Home