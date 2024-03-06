import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRef } from "react";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import SignOut from "../components/common/SignOut";

const Preview = () => {
  const pdfRef = useRef(null);
  const html = `
  <!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
     <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>file_1709738996516</title>
        <style type="text/css"> * {margin:0; padding:0; text-indent:0; }
           h1 { color: black; font-family:Georgia, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 24.5pt; }
           .p, p { color: black; font-family:Georgia, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; margin:0pt; }
           .s1 { color: black; font-family:"Times New Roman", serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 10pt; }
           .s3 { color: black; font-family:Georgia, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 1pt; }
           .s4 { color: black; font-family:Georgia, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
           h2 { color: black; font-family:Georgia, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }
           .s5 { color: black; font-family:Georgia, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
           .s6 { color: black; font-family:Georgia, serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 10pt; }
           .s7 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }
           h3 { color: black; font-family:Georgia, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10pt; }
           .s8 { color: black; font-family:Georgia, serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 11pt; }
           li {display: block; }
           #l1 {padding-left: 0pt; }
           #l1> li>*:first-child:before {content: "• "; color: black; font-family:Arial, sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 6pt; vertical-align: 1pt; }
           li {display: block; }
           #l2 {padding-left: 0pt;counter-reset: d1 1; }
           #l2> li>*:first-child:before {counter-increment: d1; content: counter(d1, upper-roman)"- "; color: black; font-family:Georgia, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 9pt; }
           #l2> li:first-child>*:first-child:before {counter-increment: d1 0;  }
           #l3 {padding-left: 0pt; }
           #l3> li>*:first-child:before {content: "• "; color: black; font-family:Arial, sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 6pt; vertical-align: 1pt; }
        </style>
     </head>
     <body>
        <h1 style="padding-left: 111pt;text-indent: 0pt;line-height: 27pt;text-align: center;">Dheeraj TP</h1>
        <p style="padding-bottom: 1pt;padding-left: 111pt;text-indent: 0pt;line-height: 11pt;text-align: center;">+91 9656633878 <a href="mailto:x@x.com" style=" color: black; font-family:&quot;Times New Roman&quot;, serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 10pt;" target="_blank">| </a>dheerajtp6338@gmail.com <span class="s1">| </span><u>linkedin.com</u> <span class="s1">| </span>github.com</p>
        <p class="s3" style="padding-left: 197pt;text-indent: 0pt;line-height: 1pt;text-align: left;">	</p>
        <p style="text-indent: 0pt;text-align: left;"><br/></p>
        <p class="s4" style="padding-top: 2pt;padding-bottom: 1pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Education</p>
        <p style="padding-left: 5pt;text-indent: 0pt;line-height: 1pt;text-align: left;"/>
        <h2 style="padding-top: 2pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">CCSIT Manjeri                                            <span class="s5">Manjeri,Calicut</span></h2>
        <p class="s6" style="padding-top: 2pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">MCA<span class="s7">                                                         </span>2017 - 2020</p>
        <h2 style="padding-top: 4pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">Global College                                            <span class="s5">Calicut, Kerala</span></h2>
        <p class="s6" style="padding-top: 2pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">BSc Computer Science<span class="s7">                                               </span>2014 - 2017</p>
        <p class="s4" style="padding-top: 6pt;padding-bottom: 1pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Experiences</p>
        <p style="padding-left: 5pt;text-indent: 0pt;line-height: 1pt;text-align: left;"/>
        <h2 style="padding-top: 2pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">Infinite Open Source Solutions — Team Lead                    <span class="s5">2022 June - Present</span></h2>
        <p class="s6" style="padding-top: 2pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">Calicut, Kerala</p>
        <ul id="l1">
           <li data-list-text="•">
              <p style="padding-top: 2pt;padding-left: 39pt;text-indent: -9pt;text-align: left;">am currently spearheading a team of four developers procient in Python, Laravel, React, and Node.js, aiming to ensure the punctual completion of designated projects.</p>
           </li>
           <li data-list-text="•">
              <p style="padding-left: 39pt;text-indent: -9pt;text-align: left;">I actively foster transparent communication with Business Analysts and Project Managers to precisely grasp client requirements.</p>
           </li>
           <li data-list-text="•">
              <p style="padding-left: 39pt;text-indent: -9pt;text-align: left;">I adeptly distribute diverse tasks and sprints among team members to maximize eciency.</p>
              <h2 style="padding-top: 5pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">XL Technologies — Junior Web Developer                    <span class="s5">2021 April - 2022 May</span></h2>
              <p class="s6" style="padding-top: 1pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">Calicut, Kerala</p>
           </li>
           <li data-list-text="•">
              <p style="padding-top: 2pt;padding-left: 39pt;text-indent: -9pt;text-align: left;">I’ve developed web applications using the MERN stack and crafted REST APIs using Express and Node.js for both mobile and web platforms</p>
           </li>
           <li data-list-text="•">
              <p style="padding-left: 39pt;text-indent: -9pt;text-align: left;">I’ve also utilized Laravel to create and modify an existing website. Collaborating closely with colleagues, I continuously strive to innovate app functionality and design.</p>
           </li>
        </ul>
        <p style="text-indent: 0pt;text-align: left;"><br/></p>
        <p class="s4" style="padding-top: 2pt;padding-bottom: 1pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Projects</p>
        <p style="padding-left: 5pt;text-indent: 0pt;line-height: 1pt;text-align: left;"/>
        <ol id="l2">
           <li data-list-text="I-">
              <h3 style="padding-top: 4pt;padding-left: 24pt;text-indent: -8pt;text-align: left;">FERN <span class="s1">| </span><i>Nodejs, React Js </i><span class="s8">link</span></h3>
              <ul id="l3">
                 <li data-list-text="•">
                    <p style="padding-top: 4pt;padding-left: 39pt;text-indent: -9pt;text-align: left;">As the technical lead at I-FERN, I eectively directed a team consisting of Python, Laravel, and PHP developers, ensuring the successful completion of projects</p>
                 </li>
                 <li data-list-text="•">
                    <p style="padding-left: 39pt;text-indent: -9pt;text-align: left;">They emphasis on multivitamins and personal care products not only promotes good health but also presents lucrative business opportunities.</p>
                 </li>
                 <li data-list-text="•">
                    <p style="padding-left: 39pt;text-indent: -9pt;text-align: left;">Their business model is meticulously crafted to oer members diverse avenues for earning income.</p>
                    <h3 style="padding-top: 7pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">Flight Booking Software <span class="s1">| </span><i>Nodejs, Express, Mongo DB                               </i><span class="s8">link</span></h3>
                 </li>
                 <li data-list-text="•">
                    <p style="padding-top: 4pt;padding-left: 39pt;text-indent: -9pt;text-align: left;">I engineered the backend for a Flight Booking Software by integrating the Duel API using Node.js, MongoDB, and the Express Framework, thereby creating robust REST APIs.</p>
                    <h3 style="padding-top: 6pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">Desklog React Application <span class="s1">| </span><i>React JS                                         </i><span class="s8">link</span></h3>
                 </li>
                 <li data-list-text="•">
                    <p style="padding-top: 4pt;padding-left: 39pt;text-indent: -9pt;text-align: left;">Desklog is a free time tracker that helps track work hours and productive hours of employees in real-time to maximise productivity.</p>
                 </li>
                 <li data-list-text="•">
                    <p style="padding-left: 39pt;text-indent: -9pt;text-align: left;">Integrated REST API and developed user specic web application using React .</p>
                    <h3 style="padding-top: 7pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">Federal Exchange <span class="s1">| </span><i>Node Js, React Js, Express JS, Mongo DB                           </i><span class="s8">link</span></h3>
                 </li>
                 <li data-list-text="•">
                    <p style="padding-top: 4pt;padding-left: 39pt;text-indent: -9pt;text-align: left;">At Federal Exchange, I played a key role in enhancing our global money transfer services, ensuring rapid delivery of funds to recipients worldwide.</p>
                 </li>
                 <li data-list-text="•">
                    <p style="padding-left: 39pt;text-indent: -9pt;text-align: left;">My contributions encompassed the development of REST APIs for the website and mobile application, as well as spearheading the design and implementation of the Admin panel using React.</p>
                 </li>
              </ul>
           </li>
        </ol>
        <p style="text-indent: 0pt;text-align: left;"><br/></p>
        <p class="s4" style="padding-bottom: 1pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Achievement</p>
        <p style="padding-left: 5pt;text-indent: 0pt;line-height: 1pt;text-align: left;"/>
        <h3 style="padding-top: 5pt;padding-left: 15pt;text-indent: 0pt;line-height: 138%;text-align: left;">Recognised as the Best React + Node Developer for the period July 2023 to December 2023. Recognised as Task Master of the Quarter Q1 - 2023.</h3>
        <h3 style="padding-left: 15pt;text-indent: 0pt;text-align: left;">Recognised as the Best Node Developer for the period July 2022 to December 2022.</h3>
        <p class="s4" style="padding-top: 7pt;padding-bottom: 1pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">Technical Skills</p>
        <p style="padding-left: 5pt;text-indent: 0pt;line-height: 1pt;text-align: left;"/>
        <h3 style="padding-top: 2pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">HTML, CSS, JavaScript, ReactJS, Nodejs, ExpressJS, MongoDB, MySQL, Docker, React Native<span class="p">:</span></h3>
     </body>
  </html>
`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.heading}>Personal Details</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text>First Name:</Text>
              <Text>Rina</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Last Name:</Text>
              <Text>Gates</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Email:</Text>
              <Text>soxydobu@mailinator.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Phone Number:</Text>
              <Text>+1 (978) 364-2109</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Github:</Text>
              <Text>https://www.mikycewenalo.ca</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Linkedin:</Text>
              <Text>https://www.myvez.me.uk</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text>College Name:</Text>
              <Text>Cade Washington</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Course:</Text>
              <Text>Yang</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Location:</Text>
              <Text>Voluptate odit exerc</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Year:</Text>
              <Text>1977</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text>Company:</Text>
              <Text>Russo and Ramirez LLC</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Role:</Text>
              <Text>Maxwell</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Location:</Text>
              <Text>Omnis culpa eum lab</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Date:</Text>
              <Text>1983</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Points:</Text>
              <View>
                <Text>Ea ex voluptas nihil</Text>
                <Text>Dolore quasi quia fa</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text>Project Name:</Text>
              <Text>Briar Warner</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Course:</Text>
              <Text>Qui aut et ducimus</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Link:</Text>
              <Text>Aut excepturi in rer</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Points:</Text>
              <View>
                <Text>Perferendis dolore q</Text>
                <Text>Perspiciatis ea omn</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.heading}>Achievement</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text>Company:</Text>
              <Text>Teagan Hatfield</Text>
            </View>
            <View style={styles.infoRow}>
              <Text>Points:</Text>
              <View>
                <Text>Consequatur Pariatu</Text>
                <Text>Consequuntur iusto q</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text>Ila Glenn:</Text>
              <Text>Et fugit non sit n</Text>
            </View>
          </View>
        </View>
        <View style={styles.extraSpace} />
      <Pressable
        onPress={() => {
          alert("download clicked");
          printToFile();
        }}
      >
        <Text>Download</Text>
      </Pressable>
      <SignOut />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "4%",
    minHeight: "90%",
  },
  section: {
    marginVertical: "2%",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
  },
  infoContainer: {
    backgroundColor: "#333",
    marginVertical: 2,
    padding: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  extraSpace: {
    height: 20,
  },
});

export default Preview;
