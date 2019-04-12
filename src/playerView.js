import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export function PlayerView({ player: { data: player } }) {
  console.log({ player })
  return (
    <>
      <h3>{player.player.name.toUpperCase()} :</h3>
      <table>
        <thead />
        <tbody>
          <tr>
            <th>Stats All</th>
          </tr>
          <tr>
            <th>Deaths</th>
            <td>{Math.round(player.stats.all.deaths_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Eliminations</th>
            <td>{Math.round(player.stats.all.eliminations_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Final Blows</th>
            <td>{Math.round(player.stats.all.final_blows_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Healing</th>
            <td>{Math.round(player.stats.all.healing_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Damage</th>
            <td>{Math.round(player.stats.all.hero_damage_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Time Played</th>
            <td>{Math.round(player.stats.all.time_played_total)}</td>
          </tr>
          <tr>
            <th>Ultimates</th>
            <td>{Math.round(player.stats.all.ultimates_earned_avg_per_10m)}</td>
          </tr>

          <tr>
            <th>Stats on {player.stats.heroes[0].name} </th>
          </tr>

          <tr>
            <th>Deaths</th>
            <td>
              {Math.round(player.stats.heroes[0].stats.deaths_avg_per_10m)}
            </td>
          </tr>
          <tr>
            <th>Eliminations</th>
            <td>
              {Math.round(
                player.stats.heroes[0].stats.eliminations_avg_per_10m
              )}
            </td>
          </tr>
          <tr>
            <th>Final Blows</th>
            <td>
              {Math.round(player.stats.heroes[0].stats.final_blows_avg_per_10m)}
            </td>
          </tr>
          <tr>
            <th>Healing</th>
            <td>
              {Math.round(player.stats.heroes[0].stats.healing_avg_per_10m)}
            </td>
          </tr>
          <tr>
            <th>Damage</th>
            <td>
              {Math.round(player.stats.heroes[0].stats.hero_damage_avg_per_10m)}
            </td>
          </tr>
          <tr>
            <th>Time Played</th>
            <td>
              {Math.round(player.stats.heroes[0].stats.time_played_total)}
            </td>
          </tr>
          <tr>
            <th>Ultimates</th>
            <td>
              {Math.round(
                player.stats.heroes[0].stats.ultimates_earned_avg_per_10m
              )}
            </td>
          </tr>
          <tr>
            <th>Rank</th>
          </tr>
          <tr>
            <th>Eliminations</th>
            <td>{Math.round(player.statRanks.eliminations_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Deaths</th>
            <td>{Math.round(player.statRanks.deaths_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Damage</th>
            <td>{Math.round(player.statRanks.hero_damage_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Healing</th>
            <td>{Math.round(player.statRanks.healing_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Ultimates</th>
            <td>{Math.round(player.statRanks.ultimates_earned_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Final Blows</th>
            <td>{Math.round(player.statRanks.final_blows_avg_per_10m)}</td>
          </tr>
          <tr>
            <th>Time Played</th>
            <td>{Math.round(player.statRanks.time_played_total)}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
