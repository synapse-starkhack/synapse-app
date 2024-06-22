import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const EthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z"/>
    </svg>
);

const StrkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m7.702-12.8c-.34-.856-.97-1.577-1.817-2.11a4.47 4.47 0 0 0-3.17-.565a5.2 5.2 0 0 0-1.613.608a6.8 6.8 0 0 0-1.294.988a10 10 0 0 0-.527.566l-.439.559l-.677.9l-.152.205c-.822 1.108-1.73 2.333-3.167 2.711c-1.167.308-1.82.164-2.483.017a9 9 0 0 0-.578-.116c.302.84.758 1.582 1.343 2.26c.592.666 1.331 1.274 2.28 1.673a5.5 5.5 0 0 0 3.212.334c1.103-.212 2.07-.722 2.853-1.312a10.2 10.2 0 0 0 1.953-1.981c.148-.195.226-.304.333-.457l.295-.437c.103-.136.201-.282.3-.427c.097-.143.194-.287.295-.42l.061-.087c.378-.532.753-1.062 1.186-1.552c.23-.262.472-.513.758-.753q.212-.179.467-.337c.173-.112.356-.199.581-.267M7.836 8.881l-.247.763a.113.113 0 0 1-.216-.002l-.236-.766a.5.5 0 0 0-.323-.328L6.05 8.3a.113.113 0 0 1 .002-.216l.766-.236a.5.5 0 0 0 .328-.323l.247-.763c.034-.105.184-.104.216.002l.236.766a.5.5 0 0 0 .323.328l.763.247c.105.034.104.184-.002.216l-.766.236a.5.5 0 0 0-.328.323m9.237 8.574a1.14 1.14 0 1 1 0-2.278a1.14 1.14 0 0 1 0 2.278" clipRule="evenodd"></path>
    </svg>
);

const LineaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.26 22H2.53V5.246h3.6v13.507h12.13zm0-13.51c1.773 0 3.21-1.452 3.21-3.245C21.47 3.453 20.033 2 18.26 2s-3.21 1.453-3.21 3.245s1.437 3.246 3.21 3.246"></path>
    </svg>
);

const ArbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="m13.551 13.523l-1.013 2.65a.3.3 0 0 0 0 .234l1.737 4.566l2.019-1.111l-2.419-6.34a.17.17 0 0 0-.064-.076a.18.18 0 0 0-.196 0a.17.17 0 0 0-.064.077m2.026-4.466a.17.17 0 0 0-.064-.079a.18.18 0 0 0-.197 0a.17.17 0 0 0-.063.079l-1.013 2.65a.3.3 0 0 0 0 .233l2.853 7.477l2.014-1.111l-3.53-9.256z"></path><path fill="currentColor" d="M12 3.116q.077 0 .144.04l7.813 4.36a.3.3 0 0 1 .107.1q.038.066.038.14v8.483a.26.26 0 0 1-.039.138a.3.3 0 0 1-.106.1l-7.813 4.378a.3.3 0 0 1-.289 0l-7.813-4.37a.3.3 0 0 1-.107-.101a.26.26 0 0 1-.038-.14V7.756a.28.28 0 0 1 .145-.24l7.813-4.36A.3.3 0 0 1 12 3.11zM12 2c-.272 0-.55.071-.793.205L3.533 6.444a1.55 1.55 0 0 0-.58.554a1.47 1.47 0 0 0-.213.758v8.483c0 .54.301 1.045.793 1.317l7.674 4.24a1.63 1.63 0 0 0 1.585 0l7.675-4.24a1.53 1.53 0 0 0 .582-.555c.14-.232.212-.495.21-.762V7.756a1.5 1.5 0 0 0-.793-1.312l-7.674-4.24A1.7 1.7 0 0 0 12 2"></path><path fill="currentColor" d="m6.925 19.428l.705-1.85l1.418 1.128l-1.324 1.167z"></path><path fill="currentColor" d="M11.36 7.001H9.407a.36.36 0 0 0-.2.065a.34.34 0 0 0-.124.162L4.918 18.3l2.008 1.128l4.595-12.195a.17.17 0 0 0-.021-.158a.19.19 0 0 0-.148-.075zm3.402 0h-1.944a.36.36 0 0 0-.198.062a.34.34 0 0 0-.126.16l-4.77 12.634l2.015 1.128l5.185-13.756a.16.16 0 0 0 0-.119a.17.17 0 0 0-.08-.09a.2.2 0 0 0-.082-.019"></path>
    </svg>
);

const OpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0M9.61 8.705q.693 0 1.244.235q.549.225.863.683q.316.45.316 1.08q0 .19-.045.479a20 20 0 0 1-.324 1.558q-.315 1.234-1.09 1.846q-.774.603-2.072.604q-1.072 0-1.756-.504q-.675-.514-.676-1.46q0-.197.045-.486q.117-.648.334-1.558q.612-2.477 3.16-2.477m4.17.09h2.397q1 0 1.603.414q.613.414.612 1.197q-.001.225-.055.47q-.224 1.035-.908 1.53q-.676.496-1.856.496h-1.217l-.414 1.973a.26.26 0 0 1-.1.162a.27.27 0 0 1-.17.063h-1.224q-.1 0-.154-.063a.22.22 0 0 1-.027-.162L13.51 9.02a.26.26 0 0 1 .097-.162a.28.28 0 0 1 .172-.063m-4.287 1.207q-.503 0-.863.297q-.351.298-.504.91q-.162.603-.324 1.477a2 2 0 0 0-.037.379q0 .828.865.828q.504 0 .855-.297q.36-.297.514-.91q.206-.847.314-1.477a2 2 0 0 0 .038-.389q0-.819-.858-.818m5.45.045l-.342 1.611h1.035q.379 0 .658-.207a.97.97 0 0 0 .377-.594q.027-.152.027-.27q0-.26-.152-.396q-.153-.144-.524-.144z"></path>
    </svg>
);

const TokenSelect = ({ onChange }) => {
  return (
    <>
        <Typography>Starknet</Typography>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large" startIcon={<EthIcon />} onClick={() => onChange({ network: 'starknet', ticket: 'eth' })}>
                ETH
            </Button>
            <Button variant="contained" size="large" startIcon={<StrkIcon />} onClick={() => onChange({ network: 'starknet', ticket: 'strk' })}>
                STRK
            </Button>
        </Stack>

        <p>Optimism</p>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large" startIcon={<EthIcon />} onClick={() => onChange({ network: 'optimism', ticket: 'eth' })} disabled>
                ETH
            </Button>
            <Button variant="contained" size="large" startIcon={<OpIcon />} onClick={() => onChange({ network: 'optimism', ticket: 'op' })} disabled>
                OP
            </Button>
        </Stack>

        <p>Arbitrum</p>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large" startIcon={<EthIcon />} onClick={() => onChange({ network: 'arbitrum', ticket: 'eth' })} disabled>
                ETH
            </Button>
            <Button variant="contained" size="large" startIcon={<ArbIcon />} onClick={() => onChange({ network: 'arbitrum', ticket: 'arb' })} disabled>
                ARB
            </Button>
        </Stack>

        <p>Linea</p>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large" startIcon={<EthIcon />} onClick={() => onChange({ network: 'starknet', ticket: 'eth' })}>
                ETH
            </Button>
        </Stack>
    </>
  );
};

export default TokenSelect;
