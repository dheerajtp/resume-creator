import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Preview = () => {
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
