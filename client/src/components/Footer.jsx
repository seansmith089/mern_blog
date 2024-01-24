import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs"

function FooterComponent() {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                SeanSmithDev
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link>About this Blog</Footer.Link>
                <Footer.Link>100 JS Projects</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link>Github</Footer.Link>
                <Footer.Link>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link>Privacy Policy</Footer.Link>
                <Footer.Link>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="SeanSmithDev" year={new Date().getFullYear()}/>
        </div>
        <div className="flex gap-6 mt-4 sm:justify-center ">
            <Footer.Icon icon={BsFacebook} color='gray'/>
            <Footer.Icon icon={BsInstagram} color='gray'/>
            <Footer.Icon icon={BsTwitter} color='gray'/>
            <Footer.Icon icon={BsGithub} color='gray'/>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent