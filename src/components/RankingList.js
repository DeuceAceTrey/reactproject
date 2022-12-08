import Rank from "./Rank";
import Streamer from "./Streamer";

const RankingList = ({streamer_list}) => {
    return <div>
        {streamer_list.map((streamer, rankNo) => <Rank key={streamer.userID} rankNo={rankNo}>
            <Streamer streamer={streamer} rankNo={rankNo} />
        </Rank>)}
    </div>
}
export default RankingList;