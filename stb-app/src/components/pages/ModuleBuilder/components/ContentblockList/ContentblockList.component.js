import React, { useEffect } from "react";
//import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import style from "./ContentblockList.module.scss";
import DOMPurify from "dompurify";
const validator = require("validator");
const ContentblockList = (props) => {
	const contenttype = (type) => {
		switch (type) {
			case 1:
				return "theoryblock";
			case 2:
				return "questionblock";
			case 3:
				return "videoblock";
			case 4:
				return "fileblock";
			default:
				return "error";
		}
	};

	let blocks = <CircularProgress />;
	if (props.contentblocks && props.contentblocks.length > 0) {
		blocks = (
			<div className={style.container}>
				{Object.values(props.contentblocks).map((block, index) => {
					let textInBlock = "";
					if (block.title) {
						textInBlock = validator.unescape(block.title);
						textInBlock = DOMPurify.sanitize(textInBlock);
					}
					return (
						<Link
							key={contenttype(block.contenttype) + "_" + block.id}
							to={"/" + contenttype(block.contenttype) + "/" + block.id}
						>
							<div className={style.contentblock_preview}>
								<b>
									{block.contenttype == 1 ? "Tekst" : ""}
									{block.contenttype == 2 ? "Oefening" : ""}
									{block.contenttype == 3 ? "Video" : ""}
									{block.contenttype == 4 ? "Link" : ""}
								</b>
								<br />
								<div
									className={style.previewBlock}
									dangerouslySetInnerHTML={{ __html: textInBlock }}
								></div>
							</div>
						</Link>
					);
				})}
			</div>
		);
	}
	return <div className="contentblocklist_container">{blocks}</div>;
};

export default ContentblockList;
