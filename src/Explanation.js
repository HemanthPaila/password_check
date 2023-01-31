import React from "react";
import "./Explanation.css";
const Explanation = () => {
  return (
    <div>
      <h2>Explanation</h2>
      <h4>EXAMPLES OF WEAK PASSWORDS</h4>
      <li>
        Any word that can be found in a dictionary, in any language (e.g.,
        airplane or aeroplano).
      </li>
      <li>
        A dictionary word with some letters simply replaced by numbers (e.g.,
        a1rplan3 or aer0plan0).
      </li>
      <li>
        A repeated character or a series of characters (e.g., AAAAA or 12345).
      </li>
      <li>A keyboard series of characters (e.g., qwerty or poiuy). </li>
      <li>
        Personal information (e.g., birthdays, names of pets or friends, Social
        Security number, addresses).
      </li>
      <h4>TIPS FOR KEEPING YOUR PASSWORD SECURE</h4>
      <li>Change it regularly—once every three to six months.</li>
      <li>
        Change it if you have the slightest suspicion that the password has
        become known by a human or a machine.
      </li>
      <li>
        Avoid typing it on computers that you do not trust; for example, in an
        Internet café.
      </li>
      <li>
        Never save it for a web form on a computer that you do not control or
        that is used by more than one person. Never tell it to anyone.
      </li>
      <li>Never write it down.</li>
      <h4>TIPS FOR CREATING A STRONG PASSWORD</h4>
      Think of a word or phrase,
      <li>
        and then substitute the letters with numbers and special characters and
        mix the case.
      </li>
      <li>
        For example, Snoopy and Woodstock becomes Sno0py&ws In the dog house
        becomes !nTh3dawgHs Let’s have dinner at 8:00 p.m. becomes Lhd@800pm
      </li>
      <li>
        Think of a word and a number, then intermix them and mix the case. For
        example, your elementary school name (Main Street Elementary) and your
        pet’s birth month and year (12/96) becomes m1A2/i9n6
      </li>
    </div>
  );
};
export default Explanation;
