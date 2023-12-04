import './globals.css'
import { Rubik } from 'next/font/google'
import {Metadata} from "next";
import {SiteNavBar} from "@/components/Navbar";
import {SiteFooter} from "@/components/Footer";
import Script from "next/script";

const inter = Rubik({ subsets: ['latin'], weight: '400'})

export const metadata:Metadata = {
  title: 'The House Of Code - Complete software engineering solution.',
  description: 'Welcome to The House Of Code, a leading nearshore web development and brand identity agency serving governments and government-related projects. We provide innovative and secure digital solutions, collaborating closely with clients to drive growth and establish strong brand identities. Contact us to shape the future of exceptional digital experiences for governments and unlock your organization\'s full potential.',
  keywords: 'web design, software developer, software consultant, nearshore web development, brand identity agency, government projects, innovative digital solutions, secure websites and applications, collaboration, strong brand identities, exceptional digital experiences, unlock organization\'s potential',
  robots: 'follow,index',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: '/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Script id="google-script" async={true} src="https://www.googletagmanager.com/gtag/js?id=G-20WGJH9V9L" />
    <Script id="google-tags">
      {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-20WGJH9V9L');`}
    </Script>
    <Script id="segment-analytics">
      {` !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="wiPgTHFvcBu14BxoDYfskpIxoCbxX3z1";;analytics.SNIPPET_VERSION="4.16.1";
      analytics.load("wiPgTHFvcBu14BxoDYfskpIxoCbxX3z1");
      analytics.page();
    }}();`}
    </Script>
      <body className={inter.className + ' bg-white'}>
      <main className="min-h-screen text-white">
        <SiteNavBar />
        {children}
        <SiteFooter />
      </main>
      </body>
    </html>
  )
}
