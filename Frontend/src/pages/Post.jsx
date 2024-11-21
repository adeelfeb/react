import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const post = true

    return post ? (
        <div>Hi from Post</div>
    ) : null;
}