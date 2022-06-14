import { Text } from "react-native";
import React from "react";
import { useEffect } from "react";
import * as LocalAuthentication from 'expo-local-authentication'

export default function LoginModal() {
    const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
    useEffect(() => {
        (async () => {
          const compatible = await LocalAuthentication.hasHardwareAsync();
          setIsBiometricSupported(compatible);
        })();
      });
    return(
        <Text> {isBiometricSupported ? 'Your device is compatible with Biometrics' : 'Face or Fingerprint scanner is available on this device'}
        </Text>
    )
}