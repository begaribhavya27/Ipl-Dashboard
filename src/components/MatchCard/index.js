// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = matchCardDetails
  const wonClassName = matchStatus === 'Won' ? 'match-won' : 'match-lose'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competent-logo"
      />
      <p className="competent-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={wonClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
