import { Request, Response, NextFunction } from 'express';

interface IRequest extends Request {}
interface IResponse extends Response {}
interface INext extends NextFunction {}

export { IRequest, IResponse, INext };
