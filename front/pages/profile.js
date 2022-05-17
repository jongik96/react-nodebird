import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followerList = [
    { nickname: "박종익" },
    { nickname: "야니스" },
    { nickname: "르브론" },
  ];
  const followingList = [
    { nickname: "박종익" },
    { nickname: "야니스" },
    { nickname: "르브론" },
  ];
  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로우 목록" data={followerList} />
      </AppLayout>
    </>
  );
};
export default Profile;
