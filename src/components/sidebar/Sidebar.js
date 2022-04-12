import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledWhiteOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                    <li className="sidebarFried">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">
                            Jane Doe
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
