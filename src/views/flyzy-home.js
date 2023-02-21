import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ZeroBtn from '../components/zero-btn'
import TestimonialCard11 from '../components/testimonial-card11'
import './flyzy-home.css'

const FlyzyHome = (props) => {
  return (
    <div className="flyzy-home-container">
      <Helmet>
        <title>Flyzy - Optimizing Travel Industry via Innovation</title>
        <meta
          name="description"
          content="Trusted by 10+ airport operators, 15+ airlines &amp; 200+ travel agents across globe"
        />
        <meta
          property="og:title"
          content="Flyzy - Optimizing Travel Industry via Innovation"
        />
        <meta
          property="og:description"
          content="Trusted by 10+ airport operators, 15+ airlines &amp; 200+ travel agents across globe"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/66f72b47-3f73-4e1c-835c-789471c20b68/cb594e10-39a5-4bd6-9710-330fad0e5dfa?org_if_sml=1"
        />
      </Helmet>
      <div className="flyzy-home-banner">
        <div className="flyzy-home-container01">
          <img
            alt="image"
            src="/playground_assets/logo-200h.png"
            className="flyzy-home-image"
          />
          <div className="flyzy-home-container02">
            <a
              href="https://flyzyzero.com"
              target="_blank"
              rel="noreferrer noopener"
              className="flyzy-home-link"
            >
              <ZeroBtn
                rootClassName="zero-btn-root-class-name2"
                className="flyzy-home-component"
              ></ZeroBtn>
            </a>
            <a
              href="https://blog.flyzygo.com"
              target="_blank"
              rel="noreferrer noopener"
              className="flyzy-home-link01 zoom"
            >
              blog
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer noopener"
              className="flyzy-home-link02 button"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flyzy-home-container03">
          <div className="flyzy-home-container04">
            <h1 className="flyzy-home-text">
              Optimizing Travel Industry via Innovation
            </h1>
            <span className="flyzy-home-text01">
              <span>
                Trusted by 10+ airport operators, 15+ airlines &amp; 200+
              </span>
              <br></br>
              <span>travel agents across globe</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer noopener"
              className="flyzy-home-link03 button"
            >
              Talk over coffee?
            </a>
          </div>
        </div>
      </div>
      <div className="flyzy-home-pricing">
        <div className="flyzy-home-card">
          <div className="flyzy-home-container05">
            <div className="flyzy-home-container06">
              <span id="shimmer" className="flyzy-home-text07">
                New Product
              </span>
              <h1 className="flyzy-home-text08">
                <span>ZERO commissions on B2B deals </span>
                <span>
                  with DMCs across globe
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
          <a
            href="https://flyzyzero.com"
            target="_blank"
            rel="noreferrer noopener"
            className="flyzy-home-link04 button"
          >
            Pre-register
          </a>
        </div>
      </div>
      <div className="flyzy-home-container07">
        <img
          alt="image"
          src="/playground_assets/group%201844-800w.png"
          className="flyzy-home-image01 desktoponly"
        />
        <img
          alt="image"
          src="/playground_assets/img1-800w.png"
          className="flyzy-home-image02 mobileonly"
        />
        <div className="flyzy-home-container08">
          <span className="flyzy-home-text11">
            <span>Blending Innovation</span>
            <br></br>
            <span>
              in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="flyzy-home-text15">Airline Business</span>
          </span>
          <span className="flyzy-home-text16">
            <span>
              We are determined to create innovative products for airline
              industry in order to enhance the efficiency, cost saving &amp;
              better user experience.
            </span>
            <br></br>
            <br></br>
            <span> Baggage tracking</span>
            <br></br>
            <span> Ground staff management</span>
            <br></br>
            <span> Optimized add on services</span>
            <br></br>
            <span> Quick boarding and distribution softwares</span>
          </span>
        </div>
      </div>
      <div className="flyzy-home-container09">
        <div className="flyzy-home-stat">
          <span className="flyzy-home-text27">Compatible with</span>
          <div className="flyzy-home-container10">
            <h1 className="flyzy-home-text28">
              <span>100</span>
              <span>+</span>
            </h1>
            <span className="flyzy-home-text31">vendors</span>
          </div>
        </div>
        <div className="flyzy-home-stat1">
          <h1 className="flyzy-home-text32">
            <span>20</span>
            <span>+</span>
          </h1>
          <span className="flyzy-home-text35">airports</span>
        </div>
        <div className="flyzy-home-stat2">
          <h1 className="flyzy-home-text36">
            <span>10</span>
            <span>+</span>
          </h1>
          <span className="flyzy-home-text39">airlines</span>
        </div>
      </div>
      <div className="flyzy-home-container11">
        <img
          alt="image"
          src="/playground_assets/group%201842-800w.png"
          className="flyzy-home-image03"
        />
        <div className="flyzy-home-container12">
          <span className="flyzy-home-text40">
            <span>Building future of </span>
            <span className="flyzy-home-text42">Airports</span>
          </span>
          <span className="flyzy-home-text43">
            <span>
              After working with leading organisations into aviation sector we
              have built a team of experts specialised into airport business and
              operations.
            </span>
            <br></br>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Fast lanes implementation</span>
            <br></br>
            <span>Passenger management</span>
            <br></br>
            <span> Airport marketing management</span>
            <br></br>
            <span> Inventory/staff management</span>
            <br></br>
            <span> AR advertising</span>
          </span>
        </div>
      </div>
      <div className="flyzy-home-container13">
        <span className="flyzy-home-text57">
          <span>Past </span>
          <span className="flyzy-home-text59">Achievements</span>
        </span>
        <div className="flyzy-home-container14">
          <img
            alt="image"
            src="/playground_assets/group%201843%201-200h.png"
            className="flyzy-home-image04"
          />
          <img
            alt="image"
            src="/playground_assets/expo-2020-dubai-uae-logo-316394644c-seeklogo%201-200h.png"
            className="flyzy-home-image05"
          />
          <img
            alt="image"
            src="/playground_assets/startindia-200h.png"
            className="flyzy-home-image06"
          />
        </div>
      </div>
      <div className="flyzy-home-testimonial">
        <h1 className="flyzy-home-text60">Vote of confidence from experts</h1>
        <div className="flyzy-home-container15 noscrollbar">
          <TestimonialCard11
            name="Capt. Vicky Narang"
            role="Airline Pilot, Startup Consultant "
            picture_src="/playground_assets/vicky-200h.jpeg"
            rootClassName="rootClassName6"
          ></TestimonialCard11>
          <TestimonialCard11
            name="Henry Moses"
            role="Director, Commercial Head, VP Sales &amp; Network Planning"
            picture_src="/playground_assets/henry-200h.jpeg"
            rootClassName="rootClassName4"
          ></TestimonialCard11>
          <TestimonialCard11
            name="Manoj Srivastava"
            role="Chief Information Officer, EaseMyTrip.com"
            picture_src="/playground_assets/manoj-200h.jpeg"
            rootClassName="rootClassName2"
          ></TestimonialCard11>
          <TestimonialCard11
            name="Dr. Praveen Srivastava"
            role="CEO at AeroChamp Aviation (Intl.) Pvt. Ltd."
            picture_src="/playground_assets/praveen-200h.jpeg"
            rootClassName="rootClassName5"
          ></TestimonialCard11>
        </div>
      </div>
      <span className="flyzy-home-text61">
        <span>Flyzy in </span>
        <span className="flyzy-home-text63">media</span>
      </span>
      <img
        alt="image"
        src="/playground_assets/media-1500w.png"
        className="flyzy-home-image07"
      />
      <footer className="flyzy-home-footer">
        <div className="flyzy-home-container16">
          <div className="flyzy-home-logo">
            <Link to="/" className="flyzy-home-navlink">
              <img
                alt="logo"
                src="/playground_assets/with%20text-1500h.png"
                className="flyzy-home-image08 zoom"
              />
            </Link>
            <span className="flyzy-home-text64">
              Recognised by Startup India [DPIIT]
            </span>
            <div className="flyzy-home-container17">
              <img
                alt="image"
                src="/playground_assets/ministry_of_commerce_and_industry.svg"
                className="flyzy-home-image09"
              />
              <img
                alt="image"
                src="/playground_assets/startindia-200h.png"
                className="flyzy-home-image10"
              />
            </div>
          </div>
          <div className="flyzy-home-links-container">
            <div className="flyzy-home-container18">
              <div className="flyzy-home-product-container">
                <span className="flyzy-home-text65">Contact Us</span>
                <span className="flyzy-home-text66">
                  <span>Phone: +91 83024 53029</span>
                  <br></br>
                </span>
                <span className="flyzy-home-text69">
                  <span>Email: info@flyzygo.com</span>
                  <br></br>
                </span>
              </div>
              <div className="flyzy-home-company-container">
                <span className="flyzy-home-text72">Company</span>
                <span className="flyzy-home-text73">
                  RAM PRASAD MEENA TECHNOLOGIES PVT. LTD.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="flyzy-home-text74">
                  B-304, Lav Kush - 4, PDPU Road Nr. Shahi Kutir Bunglaws
                  Raysan, Gandhinagar 382007 Gujarat, India
                </span>
              </div>
            </div>
            <div className="flyzy-home-container19">
              <span className="flyzy-home-text75">Download</span>
              <div className="flyzy-home-container20">
                <a
                  href="https://apps.apple.com/us/app/flyzy/id1544319940"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flyzy-home-link05"
                >
                  <img
                    alt="image"
                    src="/playground_assets/apple-200h.png"
                    className="flyzy-home-image11 zoom"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.flyzy.flutter_app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flyzy-home-link06"
                >
                  <img
                    alt="image"
                    src="/playground_assets/play-200h.png"
                    className="flyzy-home-image12 zoom"
                  />
                </a>
              </div>
              <div className="flyzy-home-icon-group">
                <a
                  href="https://twitter.com/flyzygo"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flyzy-home-link07"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="flyzy-home-icon zoom"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/flyzygo/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flyzy-home-link08"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="flyzy-home-icon2 zoom"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/flyzygo"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flyzy-home-link09"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="flyzy-home-icon4 zoom"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
              <div className="flyzy-home-contact">
                <Link to="/privacy-policy" className="flyzy-home-navlink1 zoom">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link
                  to="/terms_and_conditions"
                  className="flyzy-home-navlink2 zoom"
                >
                  T&amp;C
                </Link>
              </div>
              <span className="flyzy-home-text77">
                © 2021 flyzygo, All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        <div className="flyzy-home-separator"></div>
      </footer>
    </div>
  )
}

export default FlyzyHome
