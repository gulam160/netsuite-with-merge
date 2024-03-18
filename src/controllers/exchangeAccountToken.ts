import type { Request, Response } from "express";
import { merge } from "../utils/merge.client";

interface AccountTokenPayload {
  publicToken: string;
}

const exchangePublicToken = async (req: Request, res: Response) => {
  const { publicToken } = req.body as AccountTokenPayload;

  try {
    if (!publicToken)
      return res.status(500).send({ msg: "Public Token is missing" });

    const linkTokenResponse = await merge.accounting.accountToken.retrieve(
      publicToken
    );

    return res.status(200).send({ data: linkTokenResponse });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: (error as any).Body || error });
  }
};

export default exchangePublicToken;
