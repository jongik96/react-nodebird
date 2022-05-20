import Head from "next/head";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";
import Router from "next/router";

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  });
  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로우 목록" data={me.Followers} />
      </AppLayout>
    </>
  );
};
export default Profile;
