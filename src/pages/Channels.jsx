import { useEffect, useState } from "react";
import { BarChart3, Wifi, Activity } from "lucide-react";

import { getChannels } from "../services/api";

function Channels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    async function loadChannels() {
      const data = await getChannels();
      setChannels(data);
    }

    loadChannels();
  }, []);

  const totalNetworks = channels.reduce(
    (total, channel) => total + channel.networks,
    0
  );

  const busiestChannel =
    channels.length > 0
      ? channels.reduce((previous, current) =>
          current.networks > previous.networks
            ? current
            : previous
        )
      : null;

  return (
    <div className="page-container">

      {/* PAGE HEADER */}

      <div className="page-header">
        <div>
          <h1>Channel Analysis</h1>

          <p>
            Analyze wireless channel usage and network congestion.
          </p>
        </div>

        <div className="status-badge">
          <span></span>
          DEMO MODE
        </div>
      </div>


      {/* SUMMARY */}

      <div className="channel-summary">

        <div className="summary-card">
          <Wifi size={22} />

          <div>
            <span>Total Networks</span>
            <strong>{totalNetworks}</strong>
          </div>
        </div>


        <div className="summary-card">
          <BarChart3 size={22} />

          <div>
            <span>Channels Scanned</span>
            <strong>{channels.length}</strong>
          </div>
        </div>


        <div className="summary-card warning-card">
          <Activity size={22} />

          <div>
            <span>Busiest Channel</span>

            <strong>
              {busiestChannel
                ? `CH ${busiestChannel.channel}`
                : "--"}
            </strong>
          </div>
        </div>

      </div>


      {/* CHANNEL TABLE */}

      <div className="panel">

        <div className="panel-header">
          <h3>Channel Usage</h3>

          <span>
            {channels.length} channels
          </span>
        </div>


        <div className="channel-list">

          {channels.map((channel) => {

            const percentage =
              totalNetworks > 0
                ? (channel.networks / totalNetworks) * 100
                : 0;

            return (
              <div
                className="channel-row"
                key={channel.channel}
              >

                <div className="channel-name">
                  <strong>
                    Channel {channel.channel}
                  </strong>

                  <span>
                    {channel.networks} networks
                  </span>
                </div>


                <div className="channel-bar-container">

                  <div className="channel-bar-background">

                    <div
                      className="channel-bar"
                      style={{
                        width: `${percentage}%`,
                      }}
                    ></div>

                  </div>

                </div>


                <div className="channel-percentage">
                  {Math.round(percentage)}%
                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* CHANNEL INFORMATION */}

      <div className="panel channel-info-panel">

        <div className="panel-header">
          <h3>Channel Information</h3>
        </div>

        <div className="channel-info">

          <div>
            <strong>2.4 GHz Channels</strong>

            <p>
              Channels 1, 6 and 11 are commonly used to reduce
              overlap between nearby wireless networks.
            </p>
          </div>


          <div>
            <strong>Network Density</strong>

            <p>
              A higher number of networks on the same channel
              can indicate increased wireless activity.
            </p>
          </div>


          <div>
            <strong>ESP32 Data</strong>

            <p>
              Later, channel information can be received directly
              from the ESP32 WiFi scanning module.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Channels;