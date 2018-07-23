import React from "react";
import styled, { keyframes } from "styled-components";
import { injectIntl } from "react-intl";

import { color } from "../styles/constants";
import { Text, Flex } from "../components";

import syncIcon from "./sync.svg";

const Stat = injectIntl(({ label, value, intl }) => (
  <Flex
    row
    align="center"
    justify="space-between"
    width="16em"
    margin="8px 0 0"
  >
    <Text>{label}</Text>
    <Text color="green" weight="bold">
      {intl.formatNumber(value)}
    </Text>
  </Flex>
));

const StatusCard = styled(Flex).attrs({ align: "center", justify: "center" })`
  border: 1px solid ${color.lightGrey};
  padding: 4em;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const SpinningIcon = styled.img`
  margin-bottom: 2em;
  animation: ${rotate} 2s infinite linear;
`;

const SyncStatus = ({ status, onReload }) =>
  status && (
    <Flex height="100vh" align="center" justify="center">
      <StatusCard onClick={onReload}>
        <SpinningIcon src={syncIcon} alt="Sync icon" />
        <Text margin="0 0 8px">Syncing</Text>
        {status.warpChunksProcessed &&
          status.warpChunksAmount && (
            <div>
              <Stat
                label="Chunks processed"
                value={status.warpChunksProcessed}
              />
              <Stat label="Total chunks" value={status.warpChunksAmount} />
            </div>
          )}
        <Stat label="Current block" value={status.currentBlock} />
        <Stat label="Highest block" value={status.highestBlock} />
      </StatusCard>
    </Flex>
  );

export default SyncStatus;
