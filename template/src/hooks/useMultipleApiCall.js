/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

const useMultipleApiCall = async (apiFunctions) => {
  try {
    const responses = await Promise.all(apiFunctions.map((apiFn) => apiFn()));
    return responses;
  } catch (error) {
    throw new Error("Error calling APIs: " + error.message);
  }
};

export default useMultipleApiCall;
