import {
    ProfileInfoLabelAndBar,
    ProfileLabel,
    ProfileBar,
    ProfileBarData,
  } from "./styledComponents";
  
  const ProfileInfoLabels = (props) => {
    const { label, info } = props;
    return (
      <ProfileInfoLabelAndBar>
        <ProfileLabel>{label}</ProfileLabel>
        <ProfileBar>
          <ProfileBarData>{info || "-"}</ProfileBarData>
        </ProfileBar>
      </ProfileInfoLabelAndBar>
    );
  };
  
  export default ProfileInfoLabels;
  