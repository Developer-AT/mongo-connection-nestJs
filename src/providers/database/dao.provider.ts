
import { Injectable, Scope } from "@nestjs/common";
import { Model,ObjectId,Types } from "mongoose";

export class Dao {
    public ObjectId = Types.ObjectId;
    protected modelName

    constructor(model){
        this.modelName = model;
    }

    async saveData(data: any) {
        try {
            let ModelName = new this.modelName(data)
            return await ModelName.save();
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    async  getDataById(id: string | ObjectId){
        try {
            return await this.modelName.findById((id));
        } catch (error) {
            return Promise.reject(error);
        }
    }

    // async insertMany<T>(model: Model<T>, data: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.insertMany(data, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async getData(query: any, projection: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.find(query, projection, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async distinct(path: string, query: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.distinct(path, query);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }



    // async findOne(query: any, projection: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.findOne(query, projection, options).exec();
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async findAll(query: any, projection: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.find(query, projection, options).exec();
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async findAndUpdate(conditions: any, update: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         if (options != undefined) {
    //             options['writeConcern'] = { w: "majority", wtimeout: 5000 };
    //         } else {
    //             options = { writeConcern: { w: "majority", wtimeout: 5000 } }
    //         }
    //         return await ModelName.findOneAndUpdate(conditions, update, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async findOneAndUpdate(conditions: any, update: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         options['writeConcern'] = { w: "majority", wtimeout: 5000 };
    //         return await ModelName.findOneAndUpdate(conditions, update, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async findAndRemove(conditions: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.findOneAndRemove(conditions, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async updateOne(conditions: any, update: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         // if (options != undefined) {
    //         //     options['writeConcern'] = { w: "majority", wtimeout: 5000 };
    //         // } else {
    //         //     options = { writeConcern: { w: "majority", wtimeout: 5000 } };
    //         // }
    //         return await ModelName.updateOne(conditions, update, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async updateMany(conditions: any, update: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         if (options != undefined) {
    //             options['writeConcern'] = { w: "majority", wtimeout: 5000 };
    //         } else {
    //             options = { writeConcern: { w: "majority", wtimeout: 5000 } };
    //         }
    //         return await ModelName.updateMany(conditions, update, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }



    // async findAndReplaceOne(conditions: any, replacement: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.replaceOne(conditions, replacement, options);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async remove(condition: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.deleteMany(condition);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async populateData(query: any, projection: any, options: any, collectionOptions: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.find(query, projection, options).populate(collectionOptions).exec();
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async count(condition: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.countDocuments(condition);
    //     } catch (error) {
    //         return Promise.reject(error)
    //     }
    // }

    // async aggregateData(aggregateArray: any, options: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         let aggregation = ModelName.aggregate(aggregateArray);
    //         if (options) { aggregation.options = options; }
    //         return await aggregation.exec();
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async aggregateDataWithPopulate(group: any, populateOptions: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         let aggregate = await ModelName.aggregate(group);
    //         return await ModelName.populate(aggregate, populateOptions);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async populateDataOnAggregate(aggregate: any, populateOptions: any) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         return await ModelName.populate(aggregate, populateOptions);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    // async bulkFindAndUpdate(bulk: any, query: any, update: any, options: any) {
    //     try {
    //         return await bulk.find(query).upsert().update(update, options);
    //     } catch (error) {
    //         return Promise.reject(error)
    //     }
    // }

    // async bulkFindAndUpdateOne(bulk: any, query: any, update: any, options: any) {
    //     try {
    //         return await bulk.find(query).upsert().updateOne(update, options);
    //     } catch (error) {
    //         return Promise.reject(error)
    //     }
    // }

    // async paginateWithNextHit(aggPipe: any, limit: number, page: number) {
    //     try {
    //         let ModelName = Models[this.modelName];
    //         if (limit) {
    //             limit = Math.abs(limit);
    //         } else {
    //             limit = 10;
    //         }
    //         if (page && (page !== 0)) {
    //             page = Math.abs(page);
    //         } else {
    //             page = 1;
    //         }
    //         const skip = (limit * (page - 1));

    //         aggPipe.push({
    //             $facet: {
    //                 data: [
    //                     { $skip: skip },
    //                     { $limit: limit },
    //                 ],
    //                 metadata: [
    //                     { $count: 'total' },
    //                     { $addFields: { page } },
    //                 ],
    //             }
    //         });
    //         const result = await ModelName.aggregate(aggPipe);
    //         /* tslint:disable:no-string-literal */
    //         let next_hit = false;
    //         const total_page = (result[0].data.length > 0) ? Math.ceil(result[0].metadata[0].total / limit) : 0;
    //         if (result[0]['data'].length > limit) {
    //             result[0]['data'].pop();
    //         }

    //         if (total_page > page) {
    //             next_hit = true;
    //         }

    //         return {
    //             count: result[0]['metadata'] && result[0]['metadata'][0] ? result[0]['metadata'][0]['total'] : 0,
    //             page: result[0]['metadata'] && result[0]['metadata'][0] ? result[0]['metadata'][0]['page'] : page,
    //             totalPage: total_page,
    //             hasNextPage: next_hit,
    //             limit,
    //             rows: result[0]['data'],
    //         };
    //     } catch (error) {
    //         console.error(error);
    //         return Promise.reject(error);
    //     }
    // }
}