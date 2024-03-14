import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import SignOut from "../components/common/SignOut";
import { useSelector } from "react-redux";

const Preview = () => {
  const profileDetails = useSelector((state) => state.profile.value);
  const experienceDetails = useSelector((state) => state.experience.value);
  const collegeDetails = useSelector((state) => state.colleges.value);

  console.info(collegeDetails, "collegeDetail");
  const linkedInLink = profileDetails.linkedInUrl
    ? `| <a href="${profileDetails.linkedInUrl}">linkedin.com</a>`
    : "";
  const githubLink = profileDetails.githubUrl
    ? `| <a href="${profileDetails.githubUrl}">github.com</a>`
    : "";
  console.info(profileDetails);

  const experienceData = collegeDetails?.courses
    ?.map(
      (item) => `
  <React.Fragment key={item.id}>
    <p
      style="position: absolute; top: 155px; left: 70px; white-space: nowrap"
      class="ft13"
    >
      ${item.collegeName}
    </p>
    <p
      style="position: absolute; top: 155px; left: 744px; white-space: nowrap"
      class="ft13"
    >
      ${item.location}
    </p>
    <p
      style="position: absolute; top: 176px; left: 70px; white-space: nowrap"
      class="ft11"
    >
      ${item.collegeCourse}
    </p>
    <p
      style="position: absolute; top: 176px; left: 777px; white-space: nowrap"
      class="ft11"
    >
      ${item.year}
    </p>
  </React.Fragment>`
    )
    .join("");

    
  const html = `<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
    <head>
      <title></title>
  
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <br />
      <style type="text/css">
        <!--
          p {margin: 0; padding: 0;}	.ft10{font-size:35px;font-family:Times;color:#000000;}
          .ft11{font-size:12px;font-family:Times;color:#000000;}
          .ft12{font-size:15px;font-family:Times;color:#000000;}
          .ft13{font-size:14px;font-family:Times;color:#000000;}
          .ft14{font-size:6px;font-family:Times;color:#000000;}
          .ft15{font-size:12px;line-height:17px;font-family:Times;color:#000000;}
        -->
      </style>
    </head>
    <body bgcolor="#FFFFFF">
      <div
        id="page1-div"
        style="position: relative; width: 918px; height: 1188px"
      >
        <p
          style="position: absolute; top: 54px; left: 350px; white-space: nowrap"
          class="ft10"
        >
          ${profileDetails.firstName} ${profileDetails.lastName}
        </p>
        <p
          style="position: absolute; top: 91px; left: 50%;transform: translateX(-50%); white-space: nowrap"
          class="ft11"
        >
          ${profileDetails.phoneNumber} | <a href="mailto:${profileDetails.email}"
            >${profileDetails.email}</a
          >
          ${linkedInLink}
          ${githubLink}
        </p>
        <p
          style="position: absolute; top: 130px; left: 54px; white-space: nowrap;border-bottom: 1px solid #000;
              padding-bottom: 5px;"
          class="ft12"
        >
          Education
        </p>
        
        ${experienceData}
        <p
          style="position: absolute; top: 252px; left: 54px; white-space: nowrap;border-bottom: 1px solid #000;
              padding-bottom: 5px;"
          class="ft12"
        >
          Experiences
        </p>
        <p
          style="position: absolute; top: 277px; left: 70px; white-space: nowrap"
          class="ft13"
        >
          Infinite Open Source Solutions — Team Lead
        </p>
        <p
          style="position: absolute; top: 277px; left: 714px; white-space: nowrap"
          class="ft13"
        >
          2022 June - Present
        </p>
        <p
          style="position: absolute; top: 298px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Calicut, Kerala
        </p>
        <p
          style="position: absolute; top: 321px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 319px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          am currently spearheading a team of four developers procient in Python, Laravel, React, and Node.js, aiming to<br />ensure the punctual completion of designated projects.
        </p>
        <p
          style="position: absolute; top: 358px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 356px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          I actively foster transparent communication with Business Analysts and Project Managers to precisely grasp client<br />requirements.
        </p>
        <p
          style="position: absolute; top: 394px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 392px; left: 106px; white-space: nowrap"
          class="ft11"
        >
          I adeptly distribute diverse tasks and sprints among team members to maximize eciency.
        </p>
        <p
          style="position: absolute; top: 417px; left: 70px; white-space: nowrap"
          class="ft13"
        >
          XL Technologies — Junior Web Developer
        </p>
        <p
          style="position: absolute; top: 417px; left: 695px; white-space: nowrap"
          class="ft13"
        >
          2021 April - 2022 May
        </p>
        <p
          style="position: absolute; top: 438px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Calicut, Kerala
        </p>
        <p
          style="position: absolute; top: 461px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 459px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          I’ve developed web applications using the MERN stack and crafted REST APIs using Express and Node.js for both<br />mobile and web platforms
        </p>
        <p
          style="position: absolute; top: 497px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 495px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          I’ve also utilized Laravel to create and modify an existing website. Collaborating closely with colleagues, I<br />continuously strive to innovate app functionality and design.
        </p>
        <p
          style="position: absolute; top: 551px; left: 54px; white-space: nowrap;border-bottom: 1px solid #000;
              padding-bottom: 5px;"
          class="ft12"
        >
          Projects
        </p>
        <p
          style="position: absolute; top: 579px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          I-FERN | Nodejs, React Js
        </p>
        <p
          style="position: absolute; top: 579px; left: 829px; white-space: nowrap"
          class="ft13"
        >
          link
        </p>
        <p
          style="position: absolute; top: 605px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 604px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          As the technical lead at I-FERN, I eectively directed a team consisting of Python, Laravel, and PHP developers,<br />ensuring the successful completion of projects
        </p>
        <p
          style="position: absolute; top: 642px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 640px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          They emphasis on multivitamins and personal care products not only promotes good health but also presents<br />lucrative business opportunities.
        </p>
        <p
          style="position: absolute; top: 678px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 676px; left: 106px; white-space: nowrap"
          class="ft11"
        >
          Their business model is meticulously crafted to oer members diverse avenues for earning income.
        </p>
        <p
          style="position: absolute; top: 705px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Flight Booking Software | Nodejs, Express, Mongo DB
        </p>
        <p
          style="position: absolute; top: 704px; left: 829px; white-space: nowrap"
          class="ft13"
        >
          link
        </p>
        <p
          style="position: absolute; top: 731px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 729px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          I engineered the backend for a Flight Booking Software by integrating the Duel API using Node.js, MongoDB, and<br />the Express Framework, thereby creating robust REST APIs.
        </p>
        <p
          style="position: absolute; top: 776px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Desklog React Application | React JS
        </p>
        <p
          style="position: absolute; top: 775px; left: 829px; white-space: nowrap"
          class="ft13"
        >
          link
        </p>
        <p
          style="position: absolute; top: 802px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 800px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          Desklog is a free time tracker that helps track work hours and productive hours of employees in real-time to<br />maximise productivity.
        </p>
        <p
          style="position: absolute; top: 839px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 837px; left: 106px; white-space: nowrap"
          class="ft11"
        >
          Integrated REST API and developed user specic web application using React .
        </p>
        <p
          style="position: absolute; top: 866px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Federal Exchange | Node Js, React Js, Express JS, Mongo DB
        </p>
        <p
          style="position: absolute; top: 865px; left: 829px; white-space: nowrap"
          class="ft13"
        >
          link
        </p>
        <p
          style="position: absolute; top: 892px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 890px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          At Federal Exchange, I played a key role in enhancing our global money transfer services, ensuring rapid delivery of<br />funds to recipients worldwide.
        </p>
        <p
          style="position: absolute; top: 928px; left: 92px; white-space: nowrap"
          class="ft14"
        >
          •
        </p>
        <p
          style="position: absolute; top: 926px; left: 106px; white-space: nowrap"
          class="ft15"
        >
          My contributions encompassed the development of REST APIs for the website and mobile application, as well as<br />spearheading the design and implementation of the Admin panel using React.
        </p>
        <p
          style="position: absolute; top: 981px; left: 54px; white-space: nowrap;border-bottom: 1px solid #000;
              padding-bottom: 5px;"
          class="ft12"
        >
          Achievement
        </p>
        <p
          style="position: absolute; top: 1010px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Recognised as the Best React + Node Developer for the period July 2023 to December 2023.
        </p>
        <p
          style="position: absolute; top: 1034px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Recognised as Task Master of the Quarter Q1 - 2023.
        </p>
        <p
          style="position: absolute; top: 1057px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          Recognised as the Best Node Developer for the period July 2022 to December 2022.
        </p>
        <p
          style="position: absolute; top: 1089px; left: 54px; white-space: nowrap;border-bottom: 1px solid #000;
              padding-bottom: 5px;"
          class="ft12"
        >
          Technical Skills
        </p>
        <p
          style="position: absolute; top: 1114px; left: 70px; white-space: nowrap"
          class="ft11"
        >
          HTML, CSS, JavaScript, ReactJS, Nodejs, ExpressJS, MongoDB, MySQL, Docker, React Native:
        </p>
      </div>
    </body>
  </html>
  ;`;

  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

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
          printToFile();
        }}
      >
        <Text>Download</Text>
      </Pressable>
      {Platform.OS === "ios" && (
        <>
          <View style={styles.spacer} />
          <Button title="Select printer" onPress={selectPrinter} />
          <View style={styles.spacer} />
          {selectedPrinter ? (
            <Text
              style={styles.printer}
            >{`Selected printer: ${selectedPrinter.name}`}</Text>
          ) : undefined}
        </>
      )}
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
