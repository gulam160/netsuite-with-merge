import type { Request, Response } from "express";
import type { TokenPayloadType } from "../Types/TokenPayload";
import { merge } from "../utils/merge.client";

const generateToken = async (req: Request, res: Response) => {
  const { endUserEmailAddress, endUserOrganizationName, endUserOriginId } =
    req.body as TokenPayloadType;

  try {
    const { linkToken } = await merge.accounting.linkToken.create({
      endUserEmailAddress,
      endUserOrganizationName,
      endUserOriginId,
      categories: ["accounting"],
      integration: "netsuite",
    });

    console.log(linkToken);

    return res.status(200).send({ linkToken });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: (error as any).Body || error });
  }
};

export default generateToken;
