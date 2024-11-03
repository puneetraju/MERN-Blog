import { Link } from "react-router-dom";

const UserCard = ( { user } ) => {

    let { personal_info : { fullname , username, profile_img }} = user;

    return (
        
        <Link to={`/user/${username}`} className="flex gap-5 item-center mb-5">
            <img src={profile_img} className="w-14 h-14 rounded-full" />

            <div>
                <hi className="font-medium text-xl line-clamp-2">{fullname}</hi>
                <p className="text-dark-grey">@{username}</p>
            </div>
        </Link>

    )
}
export default UserCard;